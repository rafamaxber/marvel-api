const generateMD5Hash = require('../helpers/MD5');

class MarvelApi {
  constructor({
    clientHttpInstance, publicKey, privateKey,
  }) {
    if (!clientHttpInstance || !publicKey || !privateKey) {
      throw new Error('Is necessary send all parameters!');
    }
    this.clientHttpInstance = clientHttpInstance;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  getParameter(value) {
    const timestamp = value || Date.now();
    const parameters = timestamp + this.publicKey + this.privateKey;
    const hash = generateMD5Hash(parameters);
    return {
      apiKey: this.publicKey,
      hash,
      ts: timestamp,
    };
  }
}

module.exports = MarvelApi;
