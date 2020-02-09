const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    index: true
  },
  images: [String],
  description: String,
  id: {
    type: Number,
    index: true
  },
  rating: Number
})

module.exports = mongoose.model('Product', productSchema)
