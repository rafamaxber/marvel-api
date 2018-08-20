'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _crypto = require('crypto')

var _crypto2 = _interopRequireDefault(_crypto)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function generateMD5Hash(value) {
  if (!value) throw Error('Is necerrary send the parameter!')
  return _crypto2.default
    .createHash('md5')
    .update(String(value))
    .digest('hex')
}

exports.default = generateMD5Hash
