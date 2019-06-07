


      // es6 modules 

      import express from 'express'

      express()
        .get('/', (req, res) => res.send('Hello World'))
        .listen(3000)

      //> NOTE: you do lose __dirname and __filename and it is replaced
      //> import.meta.url

