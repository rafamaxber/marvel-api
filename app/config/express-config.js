'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _express = require('express')

var _express2 = _interopRequireDefault(_express)

var _vars = require('./vars')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

require('dotenv').load({ silent: true })

var app = (0, _express2.default)()

app
  .disable('x-powered-by')
  .use(_express2.default.json())
  .use(
    _express2.default.urlencoded({
      extended: true
    })
  )
  .listen(_vars.PORT, function() {
    console.log('Listenin on ' + _vars.HOST + ':' + _vars.PORT)
  })

exports.default = app
