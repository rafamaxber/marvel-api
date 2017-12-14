// example.js
const express = require('express');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const graphqlHTTP = require('express-graphql');

//=====================

  const crypto = require('crypto');
  const axios = require('axios');

  console.log('================');
  const timestamp = Date.now();
  const privateKey = '147882a8ecfb00e8d1e9d488a9fab40d6bd256f6';
  const publicKey = '0d6cfd363cc74d7f35a76e5cb7eedefb';
  const data = timestamp + privateKey + publicKey;
  const hash = crypto.createHash('md5').update(data).digest("hex");

  const api = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

//=====================

const port = 4000;

const CharactersType = new GraphQLObjectType({
  name: 'Characters',
  description: 'All characters 0 a 20',
  fields: () => ({
    id: { 
      type: GraphQLString,
      resolve: character => character.id
    },
    name: { 
      type: GraphQLString,
      resolve: character => character.name
    },
    thumb: { 
      type: GraphQLString,
      resolve: character => `${character.thumbnail.path}.${character.thumbnail.extension}`
    },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    allCharacters: {
      type: new GraphQLList(CharactersType),
      resolve (root) {
        return axios.get(api)
          .then(response => {
            return response.data.data.results;
          });
      }
    }
  })
});

const app = express();

app.get('/json', (req, res) => {
  return axios.get(api)
    .then(response => {
      return res.status(200).json(response.data);
    });
})

const schema  = new GraphQLSchema({
  query: RootQuery,
})

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  graphiql: true //Set to false if you don't want graphiql enabled
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);
