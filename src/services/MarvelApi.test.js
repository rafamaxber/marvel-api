const MarvelApi = require('./MarvelApi');

describe('MarvelApi', () => {
  const marvelParameters = {
    clientHttpInstance: 'te',
    publicKey: '99999',
    privateKey: '88888',
  };

  describe('Instance', () => {
    test('Should is instanciable', () => {
      expect(new MarvelApi(marvelParameters)).toBeInstanceOf(MarvelApi);
    });

    test('Should throw error if parameter not informed', () => {
      expect(() => new MarvelApi()).toThrowError();
    });

    test('Should throw error if some parameter not informed', () => {
      expect(() => new MarvelApi({})).toThrowError();
    });
  });

  describe('getParameters', () => {
    const marvelApi = new MarvelApi(marvelParameters);
    test('Should is a function', () => {
      expect(typeof marvelApi.getParameter).toBe('function');
    });

    test('Should return an object', () => {
      expect(typeof marvelApi.getParameter()).toBe('object');
    });

    test('Should return a object like that {ts: 1513633813937, apiKey: "99999", hash: "1181cfec701e6ebffb90317c5214b1e9"}', () => {
      const timestamp = 1513633813937;
      expect(marvelApi.getParameter(timestamp)).toEqual({ ts: 1513633813937, apiKey: '99999', hash: '1181cfec701e6ebffb90317c5214b1e9' });
    });
  });

});
