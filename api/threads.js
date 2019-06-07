const path = require('path')
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const threadFile = path.resolve('./thread.js')

module.exports = (n) => {
  return new Promise((resolve) => {
    let primes = []
    const min = 2;
    const max = 1e7;
    const threadCount = n || 2;
    const threads = new Set();;
    console.log(`Running with ${threadCount} threads...`);
    const range = Math.ceil((max - min) / threadCount);

    let start = min;
    
    for (let i = 0; i < threadCount; i++) {
      const myStart = start;
      console.log(`range: ${myStart} range: ${range}`)
      threads.add(new Worker(threadFile, { workerData: { start: myStart, range }}));
      start += range;
    }
    /*
    threads.add(
      new Worker(threadFile, { 
        workerData: { start, range: range + ((max - min + 1) % threadCount)}
      })
    );
    */
    
    for (let worker of threads) {
      worker.on('error', (err) => { throw err; });
      worker.on('exit', () => {
        threads.delete(worker);
        console.log(`Thread exiting, ${threads.size} running...`);
        if (threads.size === 0) {
          console.log('primes: ' + primes.length)
          //console.log(primes.join('\n'));
          resolve(primes)
        }
      })
      worker.on('message', (msg) => {
        primes = primes.concat(msg);
      });
    }
  })
}

/*
  generatePrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
*/
