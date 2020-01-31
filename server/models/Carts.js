const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  total: Number,
  items: [Number],
  id: {
    type: Number,
    index: true
  }
})

module.exports = mongoose.model('Cart', cartSchema)
