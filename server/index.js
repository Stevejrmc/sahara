const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`listening on port ${PORT}`))