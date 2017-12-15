const crypto = require('crypto');

const generateMD5Hash = value => crypto.createHash('md5').update(value).digest('hex');

exports.modules = generateMD5Hash;
