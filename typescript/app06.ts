
function getAverage(a: string, b: string, c: string): string;
function getAverage(a: number, b: number, c: number): string;

function getAverage(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    const average = total / 3;
    return 'The average is ' + average;
}

let result9 = getAverage(1,2,3)
console.log(result9)
let result10 = getAverage('1','2','3')
console.log(result10)