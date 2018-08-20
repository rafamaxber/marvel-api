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

var _MD = require('./MD5')

var _MD2 = _interopRequireDefault(_MD)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

describe('MD5', function() {
  describe('generateMD5Hash', function() {
    test('generateMD5Hash should be a function', function() {
      expect(
        typeof _MD2.default === 'undefined'
          ? 'undefined'
          : _typeof(_MD2.default)
      ).toBe('function')
    })

    test('Should return a valid MD5', function() {
      expect((0, _MD2.default)('gera teste')).toBe(
        '4cf5c44e77fa25902134e7cc68c8f441'
      )
    })

    test('Should return error when parameter is invalid', function() {
      expect(function() {
        ;(0, _MD2.default)()
      }).toThrow()
    })
  })
})
