import { importSchema } from 'graphql-import'

export const schemaCharacters = importSchema(
  `${__dirname}/schemas/characters.graphql`
)
export { resolverCharacters } from './resolvers'
