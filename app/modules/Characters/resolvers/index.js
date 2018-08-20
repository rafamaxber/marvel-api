'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _characters = require('./characters')

Object.defineProperty(exports, 'resolverCharacters', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_characters).default
  }
})

var _comics = require('./comics')

Object.defineProperty(exports, 'resolverComics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_comics).default
  }
})

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
