

        // parent.js

        const { Worker } = require('worker_threads');
        const path = require('path')

        module.exports = function () {
          const worker = new Worker(path.resolve('./worker.js'), { some: 'data' })
          worker.on('message', (data) => console.log(data))
          worker.on('error', (err) => console.log(err))
          worker.on('exit', () => console.log('thread done.'))
        }

        // worker.js

        const { parentPort, workerData } = require('worker_threads')

        // do stuff....

        parentPort.postMessage({ my: 'results'})

