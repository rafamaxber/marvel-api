const generateMD5Hash = require('../helpers/MD5');
const axios = require('axios');

const routes = {
  characters: 'characters',
};

const urlApiParameters = {
  BASE_URL: process.env.URL_API,
  PUBLIC_KEY: process.env.PUBLIC_KEY,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  TIMESTAMP: '',
  PATH: '',
};

function generateApiUrl({
  BASE_URL, TIMESTAMP, PATH, PUBLIC_KEY, PRIVATE_KEY,
} = {}) {
  if (!BASE_URL || !TIMESTAMP || !PATH || !PUBLIC_KEY || !PRIVATE_KEY) {
    throw Error('Is necerrary send all parameters!');
  }
  const hash = generateMD5Hash(TIMESTAMP, PRIVATE_KEY, PUBLIC_KEY);
  return `${BASE_URL}${PATH}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}

function httpGetAllCharacters() {
  const parameters = Object.assign({}, urlApiParameters);
  parameters.TIMESTAMP = Date.now();
  parameters.PATH = routes.characters;
  return axios.get(generateApiUrl({ ...parameters }));
}

module.exports = {
  generateApiUrl,
  httpGetAllCharacters,
  routes,
  urlApiParameters,
};
