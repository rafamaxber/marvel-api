'use strict'

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }

var _MarvelApi = require('./MarvelApi')

var _MarvelApi2 = _interopRequireDefault(_MarvelApi)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

describe('MarvelApi', function() {
  var marvelParameters = {
    clientHttpInstance: 'mockHttp',
    publicKey: '99999',
    privateKey: '88888'
  }

  describe('Instance', function() {
    test('Should is instanciable', function() {
      expect(new _MarvelApi2.default(marvelParameters)).toBeInstanceOf(
        _MarvelApi2.default
      )
    })

    test('Should throw error if parameter not informed', function() {
      expect(function() {
        return new _MarvelApi2.default()
      }).toThrowError()
    })

    test('Should throw error if some parameter not informed', function() {
      expect(function() {
        return new _MarvelApi2.default({})
      }).toThrowError()
    })
  })

  describe('getParameters', function() {
    var marvelApi = new _MarvelApi2.default(marvelParameters)
    test('Should is a function', function() {
      expect(_typeof(marvelApi.getParameters)).toBe('function')
    })

    test('Should return an object', function() {
      expect(_typeof(marvelApi.getParameters())).toBe('object')
    })

    test('Should return a object like that {ts: "1513633813937", apikey: "99999", hash: "918ad2e377c29a1a5872e39ab3f5f3d7"}', function() {
      var timestamp = '1513633813937'
      expect(marvelApi.getParameters(timestamp)).toEqual({
        ts: timestamp,
        apikey: '99999',
        hash: '918ad2e377c29a1a5872e39ab3f5f3d7'
      })
    })
  })

  describe('fetchCharacters', function() {
    var marvelApi = new _MarvelApi2.default(marvelParameters)

    test('Should be a function', function() {
      expect(_typeof(marvelApi.fetchCharacters)).toBe('function')
    })

    test('Should return a resolved promise', function() {
      var mockHttp = {
        get: function get() {
          return new Promise(function(resolve) {
            return resolve({ data: true })
          })
        }
      }
      var marvelParametersInside = {
        clientHttpInstance: mockHttp,
        publicKey: '99999',
        privateKey: '88888'
      }
      var marvelApiInside = new _MarvelApi2.default(marvelParametersInside)
      expect(marvelApiInside.fetchCharacters()).resolves.toEqual({ data: true })
    })

    test('Should return a reject promise', function() {
      var mockHttp = {
        get: function get() {
          return new Promise(function(resolve, rejects) {
            return rejects()
          })
        }
      }
      var marvelParametersInside = {
        clientHttpInstance: mockHttp,
        publicKey: '99999',
        privateKey: '88888'
      }
      var marvelApiInside = new _MarvelApi2.default(marvelParametersInside)
      expect(marvelApiInside.fetchCharacters().catch).toThrowError()
    })
  })
})
