// example.js
require('dotenv').load({ silent: true })
const express = require('express')
const CharactersType = require('./src/schemas/Characters')

const { GraphQLObjectType, GraphQLList, GraphQLSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const axios = require('axios')
const MarvelApi = require('./src/services/MarvelApi')

const app = express()

const port = process.env.PORT || 4000
const baseURL = process.env.URL_API
const clientHttpInstance = axios.create({
  baseURL
})
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY

const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey,
  privateKey
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    allCharacters: {
      type: new GraphQLList(CharactersType),
      resolve() {
        return marvelApi
          .fetchCharacters()
          .then(response => response.data.data.results)
      }
    }
  })
})

app.get('/json', (req, res) =>
  marvelApi
    .fetchCharacters()
    .then(response => res.status(200).json(response.data))
    .catch(error => res.status(402).json({ error }))
)

const schema = new GraphQLSchema({
  query: RootQuery
})

app.use(
  '/graphiql',
  graphqlHTTP({
    schema,
    graphiql: true // Set to false if you don't want graphiql enabled
  })
)

const server = app.listen(port, () => {
  console.log(`GraphQL API server running at http://localhost:${port}`)
})

module.exports = server
