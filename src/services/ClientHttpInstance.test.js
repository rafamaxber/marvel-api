const ClientHttpInstance = require('./ClientHttpInstance');

describe('ClientHttpInstance', () => {
  describe('Instance', () => {
    test('Should is instanciable', () => {
      expect(new ClientHttpInstance()).toBeInstanceOf(ClientHttpInstance);
    });

    test('Should throw error if parameter not informed', () => {
      expect(() => new ClientHttpInstance()).toThrowError();
    });

    // test('Should throw error if some parameter not informed', () => {
    //   expect(() => new ClientHttpInstance({})).toThrowError();
    // });
  });
});
