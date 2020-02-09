const db = require('../../db')
const Users = require('./model')

module.exports = {
  get: (req, res) => {
    const id = req.params.id
    Users.findOne({ id }, (err, user) => {
      if (err) {
        return res.status(400).send(err)
      }
      res.status(200).send(user)
    })
  },
  post: (req, res) => {
    Users.estimatedDocumentCount()
      .then(count => {
        req.body.id = count += 1
        Users.create(req.body, { new: true }, (err, user) => {
          if (err) {
            return res.status(400).send(err)
          }
          res.status(201).send(user)
        })
      })
  }
}
