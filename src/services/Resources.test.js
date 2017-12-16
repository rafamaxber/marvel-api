const { generateApiUrl } = require('./Resources');

describe('Resources', () => {
  const urlApiParameters = {
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
      expect(typeof generateApiUrl({ ...urlApiParameters })).toBe('string');
    });

    test('Should return an merged url when receive a URL API, marvel private key and marvel public key', () => {
      expect(generateApiUrl({ ...urlApiParameters }))
        .toBe('http://url_base.com.br/characters?ts=1513382563229&apikey=999999999999&hash=eca518762091e8796d5c69e20c1d475b');
    });

    test('Should return error if some value in parameter is undefined or null', () => {
      expect(() => {
        generateApiUrl();
      }).toThrow();
    });
  });
});
