const chai = require('chai')
const chaiHttp = require('chai-http')
const URI = 'http://localhost:3000'
const expect = chai.expect
const random = max => Math.floor(Math.random() * Math.floor(max))
const descriptions = ['furniture', 'appliance', 'electronic', 'nursery']
const id = random(25)

chai.use(chaiHttp)

describe('Products', () => {
    //GET
    describe('GET products/:id', () => {
      it('Should return a status 200', done => {

        chai.request(URI)
          .get(`/products/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // POST
    describe('POST products/', () => {
      it('Should return a status 201', done => {
        const name = 'Item' + random(10000)
        const description = descriptions[random(5)]
        const rating = random(6)
        const images = []

        chai.request(URI)
          .post('/products/')
          .send({
            name,
            description,
            rating,
            images
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            done()
          })
      })
    })

    // PUT
    describe('PUT products/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .put(`/products/${id}`)
          .send({
            name: 'updatedName'
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // DELETE
    describe('DELETE products/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .delete(`/products/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })
})
