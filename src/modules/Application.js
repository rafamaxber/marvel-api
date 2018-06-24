import path from 'path'
import { buildSchema } from 'graphql'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'
import graphqlHTTP from 'express-graphql'
import { schemaCharacters, resolverCharacters } from './Characters'

const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'))
const resolversArray = fileLoader(path.join(__dirname, '/**/resolvers/*.js'))

const schema = buildSchema(
  mergeTypes(typesArray, {
    all: true
  })
)
const resolvers = mergeResolvers(resolversArray)

const Application = app => {
  app.use(
    '/graphiql',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true
    })
  )
}

export default Application
