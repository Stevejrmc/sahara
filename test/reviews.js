const chai = require('chai')
const chaiHttp = require('chai-http')
const URI = 'http://localhost:3000'
const expect = chai.expect
const random = max => Math.floor(Math.random() * Math.floor(max))
const descriptions = ['worst', 'best', 'hate', 'love']
const type = ['furniture', 'appliance', 'electronic', 'nursery']
const id = random(25)

chai.use(chaiHttp)

describe('Reviews', () => {
    //GET
    describe('GET reviews/:id', () => {
      it('Should return a status 200', done => {

        chai.request(URI)
          .get(`/reviews/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // POST
    describe('POST reviews/', () => {
      it('Should return a status 201', done => {
        const productId = random(10000)
        const content = descriptions[random(5)] + type[random(5)]
        const title = content + '!!!'
        const author = random(25)

        chai.request(URI)
          .post('/reviews/')
          .send({
            productId,
            content,
            title,
            author
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            done()
          })
      })
    })

    // PUT
    describe('PUT reviews/:id', () => {
      it('Should return a status 200', done => {
        const content = descriptions[random(5)] + type[random(5)]
        const title = content + '!!!'
        chai.request(URI)
          .put(`/reviews/${id}`)
          .send({
            title,
            content
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // DELETE
    describe('DELETE reviews/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .delete(`/reviews/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })
})
