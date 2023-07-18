const buf1 = new Buffer.from('abcdef!');
console.log("buf1: ", buf1);
console.log("buf1: ", buf1.toString()); 
    

const buf2 = new Buffer.from('8b76fde713ce', 'base64');
console.log("buf2: ",buf2);
console.log("buf2: ",buf2.toString());
    