const generateMD5Hash = require('./MD5');

describe('MD5', () => {
  describe('generateMD5Hash', () => {
    test('generateMD5Hash should be a function', () => {
      expect(typeof generateMD5Hash).toBe('function');
    });

    test('Should return a valid MD5', () => {
      expect(generateMD5Hash('gera teste')).toBe('4cf5c44e77fa25902134e7cc68c8f441');
    });
  });
});
