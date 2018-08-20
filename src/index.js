require('dotenv').load({
  silent: true
})

require('babel-core').transform('code', {
  comments: false
})
require('./config')
