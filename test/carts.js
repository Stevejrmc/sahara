const chai = require('chai')
const chaiHttp = require('chai-http')
const URI = 'http://localhost:3000'
const expect = chai.expect
const random = max => Math.floor(Math.random() * Math.floor(max))
const id = random(25)

chai.use(chaiHttp)

describe('Carts', () => {
    //GET
    describe('GET carts/:id', () => {
      it('Should return a status 200', done => {

        chai.request(URI)
          .get(`/carts/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // POST
    describe('POST carts/', () => {
      it('Should return a status 201', done => {
        const total = 0
        const items = []

        chai.request(URI)
          .post('/carts/')
          .send({
            total,
            items
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            done()
          })
      })
    })

    // PUT
    describe('PUT carts/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .put(`/carts/${id}`)
          .send({
            total: random(500),
            items: [5]
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // DELETE
    describe('DELETE carts/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .delete(`/carts/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })
})
