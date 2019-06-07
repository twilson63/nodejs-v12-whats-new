


          // no more body-parse

          const express = require('express')

          const app = express()

          app.post('/', express.json(), (req, res) => {
            res.send(req.body)
          })

          app.get('/', (req, res) => res.send('Echo Server'))

          if (!module.parent) {
            app.listen(3000)
          }

          module.exports = app
