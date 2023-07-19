function f01(a: number): number{
    return a/10 ;
}

console.log(f01(24)) ;

// ===============

function f03( v ){
    
    console.log(v) ;
    v = "new val" ;
    console.log(v) ;
}

f03(32)
f03(true)

// ===============
function f02(){
    let val: any = 34;
    console.log(val) ;
    val = "next" ;
    console.log(val) ;
}

f02() ;

