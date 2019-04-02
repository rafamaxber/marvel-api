import crypto from 'crypto'

function generateMD5Hash (value) {
  if (!value) throw Error('Is necerrary send the parameter!')
  return crypto
    .createHash('md5')
    .update(String(value))
    .digest('hex')
}

export default generateMD5Hash
