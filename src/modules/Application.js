import path from 'path'
import { buildSchema } from 'graphql'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'
import graphqlHTTP from 'express-graphql'

const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'))
const resolversArray = fileLoader(path.join(__dirname, '/**/resolvers/*.js'))

const schema = buildSchema(
  mergeTypes(typesArray, {
    all: true
  })
)
const rootValue = mergeResolvers(resolversArray)

const Application = app => {
  app.use(
    '/graphiql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true
    })
  )
}

export default Application
