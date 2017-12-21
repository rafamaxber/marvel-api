const ClientHttpInstance = require('./ClientHttpInstance');

describe('ClientHttpInstance', () => {
  const clientHttpInstanceMock = {
    httpClient: 'ttt', 
    baseURL: 'tt',
  };
  describe('Instance', () => {
    test('Should is instanciable', () => {
      expect(new ClientHttpInstance(clientHttpInstanceMock)).toBeInstanceOf(ClientHttpInstance);
    });

    test('Should throw error if parameter not informed', () => {
      expect(() => new ClientHttpInstance()).toThrowError();
    });

    test('Should throw error if some parameter not informed', () => {
      expect(() => new ClientHttpInstance({})).toThrowError();
    });
  });
});
