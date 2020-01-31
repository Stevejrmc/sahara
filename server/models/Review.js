const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  id: {
    type: Number,
    index: true
  },
  productId: {
    type: Number,
    index: true
  },
  title: String,
  content: String,
  author: {
    type: Number,
    index: true
  }
})

module.exports = mongoose.model('Review', reviewSchema)
