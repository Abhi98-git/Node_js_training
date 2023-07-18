const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  console.log('Inside Main Thread:', process.pid);
  
  // re-loads the current file inside a Worker instance.

  let t1 = new Worker('./myworker.js');
    
} else {
  console.log("nothing to do....") ;
   console.log(t1) ;
   console.log('Inside Worker Thread:' , process.pid);
   console.log(isMainThread);  // prints 'false'.
}