import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'
import { IResolvers } from 'graphql-tools'

class App {
  public constructor () {
    this.startServer()
  }

  private get typeDefs (): string {
    const listTypes: string[] = fileLoader(path.join(__dirname, '/**/*.graphql'))

    return mergeTypes(listTypes, {
      all: true
    })
  }

  private get resolvers (): IResolvers {
    const resolversList: IResolvers[] = fileLoader(path.join(__dirname, '/**/resolvers/*.ts'))

    return mergeResolvers(resolversList)
  }

  private startServer (): void {
    new GraphQLServer({ typeDefs: this.typeDefs, resolvers: this.resolvers })
      .start(() => console.log('Server is running on localhost:4000'))
  }
}

export default new App()
