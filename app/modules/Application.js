'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _path = require('path')

var _path2 = _interopRequireDefault(_path)

var _graphql = require('graphql')

var _mergeGraphqlSchemas = require('merge-graphql-schemas')

var _expressGraphql = require('express-graphql')

var _expressGraphql2 = _interopRequireDefault(_expressGraphql)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var typesArray = (0, _mergeGraphqlSchemas.fileLoader)(
  _path2.default.join(__dirname, '/**/*.graphql')
)
var resolversArray = (0, _mergeGraphqlSchemas.fileLoader)(
  _path2.default.join(__dirname, '/**/resolvers/*.js')
)

var schema = (0, _graphql.buildSchema)(
  (0, _mergeGraphqlSchemas.mergeTypes)(typesArray, {
    all: true
  })
)
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)(resolversArray)

var Application = function Application(app) {
  app.use(
    '/graphiql',
    (0, _expressGraphql2.default)({
      schema: schema,
      rootValue: resolvers,
      graphiql: true
    })
  )
}

exports.default = Application
