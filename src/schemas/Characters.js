const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

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
      resolve(root) {
        return axios.get(api)
          .then(response => {
            return response.data.data.results;
          });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})