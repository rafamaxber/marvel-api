'use strict'

var _expressConfig = require('./express-config')

var _expressConfig2 = _interopRequireDefault(_expressConfig)

var _Application = require('../modules/Application')

var _Application2 = _interopRequireDefault(_Application)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Bootstraping all aplication
;(0, _Application2.default)(_expressConfig2.default)
