const generateMD5Hash = require('../helpers/MD5')

class Marvel {
  constructor({ clientHttpInstance, publicKey, privateKey }) {
    if (!clientHttpInstance || !publicKey || !privateKey) {
      throw new Error('Is necessary send all parameters!')
    }
    this.clientHttpInstance = clientHttpInstance
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  getParameters(timestamp = Date.now()) {
    const parameters = `${timestamp}${this.privateKey}${this.publicKey}`
    const hash = generateMD5Hash(parameters)
    return {
      ts: String(timestamp),
      apikey: String(this.publicKey),
      hash
    }
  }
}

class MarvelApi extends Marvel {
  constructor(marvelConfig) {
    super(marvelConfig)
    this.nameApp = 'Marvel'
  }

  fetchCharacters() {
    return this.clientHttpInstance
      .get('/characters', { params: this.getParameters() })
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      })
  }
}

module.exports = MarvelApi
