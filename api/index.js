const express = require('express')
const timeSpan = require('time-span')
const primes = require('./primes.js')
const threads = require('./threads.js')
const app = express()

app.get('/primes', async (req, res) => {
  if (req.query.w === '1') {
    const end = timeSpan()
    const results = primes(2, 1e7)
    res.send({ time: end.seconds(), primes: results.length})
  } else {
    const end = timeSpan()
    const results = await threads(Number(req.query.w || '2'))
    res.send({time: end.seconds(), primes: results.length})
  }

})


app.get('/single', (req, res) => {
  const min = 2;
  const max = 1e7;


  const end = timeSpan()
  const results = primes(min, max)
  res.send({ time: end.seconds(), primes: results.length })
})

app.get('/worker', async (req, res) => {
  const end = timeSpan()
  const results = await threads(Number(req.query.w || '2'))
  res.send({ time: end.seconds(), primes: results.length })

})

app.get('/', (req, res) => {
  res.send({ name: 'worker test'})
})

module.exports = app
