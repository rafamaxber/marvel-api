import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'

const typesList = fileLoader(path.join(__dirname, '/**/*.graphql'))
const resolversList = fileLoader(path.join(__dirname, '/**/resolvers/*.ts'))

const typeDefs = mergeTypes(typesList, {
  all: true
})

const resolvers = mergeResolvers(resolversList)

console.log(typeDefs)
console.log(resolvers)

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))

class App {
  public listTypes: File[]
  public resolversList: File[]

  public constructor () {
    this.listTypes = fileLoader(path.join(__dirname, '/**/*.graphql'))
    this.resolversList = fileLoader(path.join(__dirname, '/**/resolvers/*.ts'))
  }
}

export default new App()
