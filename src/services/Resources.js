const generateMD5Hash = require('../helpers/MD5');
/*
const axios = require('axios');

const routes = {
  characters: 'characters',
};
*/

function generateApiUrl({
  BASE_URL, TIMESTAMP, PATH, PUBLIC_KEY, PRIVATE_KEY,
}) {
  if (!BASE_URL || !TIMESTAMP || !PATH || !PUBLIC_KEY || !PRIVATE_KEY) {
    throw Error('Is necerrary send all parameters!');
  }
  const hash = generateMD5Hash(TIMESTAMP, PRIVATE_KEY, PUBLIC_KEY);
  return `${BASE_URL}${PATH}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}

/*
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
*/

module.exports = {
  generateApiUrl,
};
