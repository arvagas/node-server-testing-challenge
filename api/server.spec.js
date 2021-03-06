const request = require('supertest')

const server = require('./server')

describe('server.js', () => {
  describe('GET /', () => {
    it('returns 200 OK', () => {
      return request(server).get('/').then(res => {
        expect(res.status).toBe(200)
      })
    })

    it("should return 'Hello from node-server-testing-challenge'", async () => {
      const res = await request(server).get('/')

      expect(res.body).toBe('Hello from node-server-testing-challenge')
    })

    it('returns JSON', done => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i)

          done()
        })
    })
  })
})