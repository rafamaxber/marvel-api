import generateMD5Hash from '../helpers/MD5'

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

  fetchCharacters(filters = {}) {
    const params = Object.assign({}, this.getParameters(), filters)
    return this.clientHttpInstance
      .get('/characters', {
        params
      })
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      })
  }
}

export default MarvelApi
