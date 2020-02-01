const chai = require('chai')
const chaiHttp = require('chai-http')
const URI = 'http://localhost:3000'
const expect = chai.expect

chai.use(chaiHttp)

describe('Users', () => {
  //GET
  describe('GET users/1', () => {
    it('Should return a status 200', done => {
      chai.request(URI)
        .get('/users/1')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          done()
        })
    })
  })

  // POST
})
