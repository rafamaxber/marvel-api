import { throws } from 'assert';

const axios = require('axios');
const crypto = require('crypto');

const routes = {
  characters
}

const axiosInstance = axios.create({
  baseURL: process.env.URL_API,
});

class Resources {
  
  constructor() {
    this.timestamp = Date.now();
    this.privateKey = process.env.PRIVATE_KEY;
    this.publicKey = process.env.PUBLIC_KEY;
    this.API_URL = process.env.URL_API;
    this.hash = crypto
      .createHash('md5')
      .update(this.timestamp + this.privateKey + this.publicKey)
      .digest("hex");
    this.requiredParams = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  }
  
  buildApiUrl(path, args = {}) {
    return `${API_URL}${path}${requiredParams}${args}`
  }

  httpGetAllCharacters() {
    return axios.get(this.buildApiUrl(routes.characters))
      .then(res => res.data)
      .catch(error => Error(error));
  }

}

module.exports = {
  Resources
};