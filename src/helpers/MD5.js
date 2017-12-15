const crypto = require('crypto');

function generateMD5Hash(value) {
  return crypto.createHash('md5').update(value).digest('hex');
}

module.exports = generateMD5Hash;