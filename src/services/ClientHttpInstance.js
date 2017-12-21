class ClientHttpInstance {
  constructor({
    httpClient, baseURL,
  }) {
    if (!httpClient || !baseURL) {
      throw new Error('Is necessary send all parameters!');
    }
    this.httpClient = httpClient;
    this.baseURL = baseURL;
  }
};

module.exports = ClientHttpInstance;
