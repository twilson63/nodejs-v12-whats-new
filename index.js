const express = require('express')
const path = require('path')
const api = require('./api')

const app = express()

app.use(api)
app.use(express.static('./app/public'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./app/public/index.html'))
})

app.listen(process.env.PORT || 3000)

