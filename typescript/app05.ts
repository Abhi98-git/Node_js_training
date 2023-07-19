function getAverage2(a: number, b: number, c?: number): string {
    if(c == undefined){
        let total = a + b; 
        let average = total / 2;
        return 'The average is: ' + average;
    }
    else{
        let total = a + b + c!; 
        let average = total / 3;
        return 'The average is: ' + average;
    }    
}
let result7 = getAverage2(4, 3, 8);
console.log(result7);


let result8 = getAverage2(4, 3);
console.log(result8);