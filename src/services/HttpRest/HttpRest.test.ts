import { HttpRest } from '.'

describe('HttpRest', () => {
  describe('Smoke tests', () => {
    test('Should be a function', () => {
      expect(typeof HttpRest).toBe('function')
    })

    test('Should be GET method', () => {
      expect(typeof HttpRest.get).toBe('function')
    })

    test('Should be POST method', () => {
      expect(typeof HttpRest.post).toBe('function')
    })

    test('Should be POST method', () => {
      expect(typeof HttpRest.post).toBe('function')
    })
  })
})
