const { parentPort, workerData } = require('worker_threads');

const generatePrimes = require('./primes')

const primes = generatePrimes(workerData.start, workerData.range)

parentPort.postMessage(primes)
