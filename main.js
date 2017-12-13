// example.js
const express = require('express');
const {
  buildSchema,
  GraphQLObjectType
} = require('graphql');
const graphqlHTTP = require('express-graphql');

const crypto = require('crypto');
const axios = require('axios');

const port = 4000;

//=====================


console.log('================');
const timestamp = Date.now();
const privateKey = '147882a8ecfb00e8d1e9d488a9fab40d6bd256f6';
const publicKey = '0d6cfd363cc74d7f35a76e5cb7eedefb';
const data = timestamp + privateKey + publicKey;
const hash = crypto.createHash('md5').update(data).digest("hex");

const api = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

//=====================

let schema = buildSchema(`
  type Query {
    characters: ${},
    character: String
  }
`);

// Root provides a resolver function for each API endpoint
let root = {
  postTitle: () => {
    return 'Build a Simple GraphQL Server With Express and NodeJS';
  },
  blogTitle: () => {
    return 'scotch.io';
  }
};

const app = express();

app.get('/json', (req, res) => {
  return axios.get(api)
    .then(response => {
      return res.status(200).json(response.data);
    });
})

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true //Set to false if you don't want graphiql enabled
}));

app.listen(port);
console.log('GraphQL API server running at localhost:' + port);
