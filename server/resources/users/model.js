const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  id: {
    type: Number,
    index: true
  },
  email: String,
  password: String,
  cart: Number
})

module.exports = mongoose.model('User', userSchema)
