/*

const generateMD5Hash = require('../helpers/MD5');
class ClientHttpInstance {
  constructor({
    httpClient, baseURL,
  }) {
    this.httpClient = httpClient;
    this.baseURL = baseURL;
  }

  create() {
    return this.httpClient.create({
      baseURL: this.baseURL,
    });
  }
}

class MarvelApi {
  constructor({
    clientHttpInstance, publicKey, privateKey,
  }) {
    this.httpInstance = clientHttpInstance;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  allCharacters() {
    return this.httpInstance.get('/characters', this.getParameters());
  }
  getParameters() {
    const TIMESTAMP = Date.now();

    return {
      ts: TIMESTAMP,
      apikey: this.publicKey,
      hash: generateMD5Hash(TIMESTAMP, this.privateKey, this.publicKey),
    };
  }
}

const val = '';

const clientHttpInstance = new ClientHttpInstance({
  httpClient: val,
  baseURL: val,
}).getClientInstance();

const marvelApi = new MarvelApi({
  clientHttpInstance,
  publicKey: val,
  privateKey: val,
});

module.exports = {
  ClientHttpInstance,
  MarvelApi,
};

*/
