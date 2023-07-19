function getAverage3(a: number, b: number, c: number): string {
    let total = a + b + c; 
    let average = total / 3;
    return 'The average is: ' + average;
}
let result6 = getAverage3(4, 3, 8);
console.log(result6);