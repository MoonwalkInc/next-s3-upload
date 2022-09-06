
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./next-s3-upload-host-headers.cjs.production.min.js')
} else {
  module.exports = require('./next-s3-upload-host-headers.cjs.development.js')
}
