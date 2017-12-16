const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const {
  generateApiUrl,
  httpGetAllCharacters,
  routes,
  urlApiParameters,
} = require('./Resources');

describe('Resources', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
    mock.restore();
  });

  const parameters = {
    BASE_URL: 'http://url_base.com.br/',
    TIMESTAMP: '1513382563229', // valid timestamp
    PATH: 'characters',
    PUBLIC_KEY: '999999999999',
    PRIVATE_KEY: '888888888888',
  };

  describe('generateApiUrl', () => {
    test('Should be a function', () => {
      expect(typeof generateApiUrl).toBe('function');
    });

    test('Should return a string', () => {
      expect(typeof generateApiUrl({ ...parameters })).toBe('string');
    });

    test('Should return an merged url when receive a URL API, marvel private key and marvel public key', () => {
      expect(generateApiUrl({ ...parameters }))
        .toBe('http://url_base.com.br/characters?ts=1513382563229&apikey=999999999999&hash=eca518762091e8796d5c69e20c1d475b');
    });

    test('Should return error if some value in parameter is undefined or null', () => {
       expect(() => {
        generateApiUrl();
      }).toThrow();
    });

    test('Should throw message equal to: Is necerrary send all parameters!', () => {
      expect(() => {
        generateApiUrl();
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('httpGetAllCharacters', () => {

    test('Should be a function', () => {
      expect(typeof httpGetAllCharacters).toBe('function');
    });
    test('Should return data when httpGetAllCharacters is called', () => {
      const data = { response: true };
      mock.onGet('http://gateway.marvel.com/v1/public/').reply(200, data);

      httpGetAllCharacters(parameters).then((response) => {
        expect(response).toBe(data);
      });
    });
  });

  describe('routes', () => {
    test('Should match with snapshot', () => {
      expect(routes).toMatchSnapshot();
    });
  });

  describe('urlApiParameters', () => {
    test('Should match with snapshot', () => {
      expect(urlApiParameters).toMatchSnapshot();
    });
  });
});
