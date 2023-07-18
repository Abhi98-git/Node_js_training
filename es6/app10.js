const myname = "Nilgiris"
const elevation = 9738

const mtn = { myname, elevation }
console.log(mtn);



let myname2 = "Nilgiris"
    let elevation2 = 9770
    let print2 = function () {
      console.log(`Mt.:  ${this.myname2} is ${this.elevation2} feet tall`)
    }
    
   print2()
   
    let mtn2 = { myname2, elevation2, print2 }
    console.log(mtn2) ;
    mtn2.print2()