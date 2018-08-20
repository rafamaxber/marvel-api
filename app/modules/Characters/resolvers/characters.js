'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _axios = require('axios')

var _axios2 = _interopRequireDefault(_axios)

var _vars = require('../../../config/vars')

var _MarvelApi = require('../../../services/MarvelApi')

var _MarvelApi2 = _interopRequireDefault(_MarvelApi)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments)
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg)
          var value = info.value
        } catch (error) {
          reject(error)
          return
        }
        if (info.done) {
          resolve(value)
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value)
            },
            function(err) {
              step('throw', err)
            }
          )
        }
      }
      return step('next')
    })
  }
}

var clientHttpInstance = _axios2.default.create({
  baseURL: _vars.BASE_URL
})

var marvelApi = new _MarvelApi2.default({
  clientHttpInstance: clientHttpInstance,
  publicKey: _vars.PUBLIC_KEY,
  privateKey: _vars.PRIVATE_KEY
})

var getCharacter = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(args) {
      var characters
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return marvelApi.fetchCharacters(args).then(function(data) {
                  return data.data.data.results
                })

              case 2:
                characters = _context.sent
                return _context.abrupt(
                  'return',
                  characters.filter(function(character) {
                    return character.id === id
                  })[0]
                )

              case 4:
              case 'end':
                return _context.stop()
            }
          }
        },
        _callee,
        undefined
      )
    })
  )

  return function getCharacter(_x) {
    return _ref.apply(this, arguments)
  }
})()

var getCharacters = (function() {
  var _ref2 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(args) {
      var characters
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return marvelApi.fetchCharacters(args).then(function(data) {
                  return data.data.data.results
                })

              case 2:
                characters = _context2.sent
                return _context2.abrupt('return', characters)

              case 4:
              case 'end':
                return _context2.stop()
            }
          }
        },
        _callee2,
        undefined
      )
    })
  )

  return function getCharacters(_x2) {
    return _ref2.apply(this, arguments)
  }
})()

var root = {
  character: getCharacter,
  characters: getCharacters
}

exports.default = root
