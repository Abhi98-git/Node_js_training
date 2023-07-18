const { parse, stringify  } = require('querystring');


const res01 = parse('foo=bar&abc=xyz&abc=123');
console.log("parsed result: ", res01) ;

const res02 = stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log("query string result: ", res02) ;