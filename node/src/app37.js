const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker('./myworker2.js');
  console.log(worker.pid) ;
  
  // receive messages from the worker thread
  worker.once('message', (message) => {
    console.log('received from the worker thread: ', process.pid, message.status);
  });

  // send a ping message to the spawned worker thread 
  worker.postMessage('ping');
} 
