const axios = require('axios');
const generateMD5Hash = require('../helpers/MD5');

const routes = {
  characters: 'characters',
};

const timestamp = Date.now();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const API_URL = process.env.URL_API;
const hash = generateMD5Hash(timestamp + privateKey + publicKey);
const requiredParams = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const getAPI_URL = (path, args = {}) => {
  return `${API_URL}${path}${requiredParams}${args}`;
};


const instance = axios.create({
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
      .digest('hex');
    this.requiredParams = `?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`;
  }

  buildApiUrl(path, args = {}) {
    return `${this.API_URL}${this.path}${this.requiredParams}${args}`;
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