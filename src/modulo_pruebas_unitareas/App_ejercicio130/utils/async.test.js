import { getDataCallback } from './async'

describe('Haciendo test a operaciones asinctronas', () => {

  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Gerardo Gallegos')
      done()
    })
  })

})