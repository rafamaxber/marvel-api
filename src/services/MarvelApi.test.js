const MarvelApi = require('./MarvelApi');

describe('MarvelApi', () => {
  const marvelParameters = {
    clientHttpInstance: 'mockHttp',
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
      expect(typeof marvelApi.getParameters).toBe('function');
    });

    test('Should return an object', () => {
      expect(typeof marvelApi.getParameters()).toBe('object');
    });

    test('Should return a object like that {ts: 1513633813937, apiKey: "99999", hash: "1181cfec701e6ebffb90317c5214b1e9"}', () => {
      const timestamp = 1513633813937;
      expect(marvelApi.getParameters(timestamp)).toEqual({ ts: timestamp, apiKey: '99999', hash: '1181cfec701e6ebffb90317c5214b1e9' });
    });
  });

  describe('fetchCharacters', () => {
    const marvelApi = new MarvelApi(marvelParameters);

    test('Should be a function', () => {
      expect(typeof marvelApi.fetchCharacters).toBe('function');
    });

    test('Should return a resolved promise', () => {
      const mockHttp = {
        get() {
          return new Promise(resolve => resolve({ data: true }));
        },
      };
      const marvelParametersInside = {
        clientHttpInstance: mockHttp,
        publicKey: '99999',
        privateKey: '88888',
      };
      const marvelApiInside = new MarvelApi(marvelParametersInside);
      expect(marvelApiInside.fetchCharacters()).resolves.toEqual({ data: true });
    });
    
    test('Should return a reject promise', () => {
      const mockHttp = {
        get(path) {
          return new Promise((resolve, rejects) => rejects({ data: false }));
        },
      };
      const marvelParametersInside = {
        clientHttpInstance: mockHttp,
        publicKey: '99999',
        privateKey: '88888',
      };
      const marvelApiInside = new MarvelApi(marvelParametersInside);
      expect(marvelApiInside.fetchCharacters()).rejects.toEqual({ data: false });
    });
  });

});
