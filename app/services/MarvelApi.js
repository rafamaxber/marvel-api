'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var _MD = require('../helpers/MD5')

var _MD2 = _interopRequireDefault(_MD)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var Marvel = (function() {
  function Marvel(_ref) {
    var clientHttpInstance = _ref.clientHttpInstance,
      publicKey = _ref.publicKey,
      privateKey = _ref.privateKey

    _classCallCheck(this, Marvel)

    if (!clientHttpInstance || !publicKey || !privateKey) {
      throw new Error('Is necessary send all parameters!')
    }
    this.clientHttpInstance = clientHttpInstance
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  _createClass(Marvel, [
    {
      key: 'getParameters',
      value: function getParameters() {
        var timestamp =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : Date.now()

        var parameters = '' + timestamp + this.privateKey + this.publicKey
        var hash = (0, _MD2.default)(parameters)
        return {
          ts: String(timestamp),
          apikey: String(this.publicKey),
          hash: hash
        }
      }
    }
  ])

  return Marvel
})()

var MarvelApi = (function(_Marvel) {
  _inherits(MarvelApi, _Marvel)

  function MarvelApi(marvelConfig) {
    _classCallCheck(this, MarvelApi)

    var _this = _possibleConstructorReturn(
      this,
      (MarvelApi.__proto__ || Object.getPrototypeOf(MarvelApi)).call(
        this,
        marvelConfig
      )
    )

    _this.nameApp = 'Marvel'
    return _this
  }

  _createClass(MarvelApi, [
    {
      key: 'fetchCharacters',
      value: function fetchCharacters() {
        var filters =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

        var params = Object.assign({}, this.getParameters(), filters)
        return this.clientHttpInstance
          .get('/characters', {
            params: params
          })
          .then(function(response) {
            return response
          })
          .catch(function(error) {
            throw new Error(error)
          })
      }
    }
  ])

  return MarvelApi
})(Marvel)

exports.default = MarvelApi
