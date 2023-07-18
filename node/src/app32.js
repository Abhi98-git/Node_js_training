const { parse  } = require('querystring');


const res01 = parse('foo=bar&abc=xyz&abc=123');
console.log("parsed result: ", res01) ;