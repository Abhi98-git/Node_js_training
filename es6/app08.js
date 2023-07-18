const myBoxA = {
    heightA: 12,
    widthA: 14,
    metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
};

let {metaData} = myBoxA;
let [,obj] = metaData;
console.log(obj.currency);

console.log(metaData[1].currency)
//swap variables without third variable
let  a2 = 10, b2 = 20;
[a2,b2] = [b2,a2]
console.log(a2,b2)


