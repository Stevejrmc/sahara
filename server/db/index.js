const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/sahara', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
