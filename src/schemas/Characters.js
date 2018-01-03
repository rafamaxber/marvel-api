const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const CharactersType = new GraphQLObjectType({
  name: 'Characters',
  description: 'All characters 0 a 20',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: character => character.id,
    },
    name: {
      type: GraphQLString,
      resolve: character => character.name,
    },
    thumb: {
      type: GraphQLString,
      resolve: character => `${character.thumbnail.path}.${character.thumbnail.extension}`,
    },
  }),
});

module.exports = CharactersType;
