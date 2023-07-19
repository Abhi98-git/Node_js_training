class Singleton {
    private static singleton: Singleton;
    
    constructor() {
        if (!Singleton.singleton) {
            Singleton.singleton = this;
            console.log("init steps ... ", this);
        }
        return Singleton.singleton;
    }
    add() {console.log("add fn called"); }
}

    
    
const obj1a = new Singleton();
const obj2 = new Singleton();

console.log( "comparison: " ,obj1a === obj2); // true;