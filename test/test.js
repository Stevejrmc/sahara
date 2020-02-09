const chai = require('chai')
const chaiHttp = require('chai-http')
const URI = 'http://localhost:3000'
const expect = chai.expect
const random = max => Math.floor(Math.random() * Math.floor(max))
const id = random(25)

chai.use(chaiHttp)

describe('Users', () => {
    //GET
    describe('GET users/:id', () => {
      it('Should return a status 200', done => {

        chai.request(URI)
          .get(`/users/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // POST
    describe('POST users/', () => {
      it('Should return a status 201', done => {
        const username = 'user' + random(10000)
        const email = username + '@me.com'

        chai.request(URI)
          .post('/users/')
          .send({
            username,
            email,
            password: 'password'
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            done()
          })
      })
    })

    // PUT
    describe('PUT users/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .put(`/users/${id}`)
          .send({
            password: 'updatedPassword'
          })
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    // DELETE
    describe('DELETE users/:id', () => {
      it('Should return a status 200', done => {
        chai.request(URI)
          .delete(`/users/${id}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
          })
      })
    })
})

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
        const username = 'user' + random(10000)
        const email = username + '@me.com'

        chai.request(URI)
          .post('/products/')
          .send({
            username,
            email,
            password: 'password'
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
            password: 'updatedPassword'
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
