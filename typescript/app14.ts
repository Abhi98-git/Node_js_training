interface MyCoord {
    x: number;
}
// ... elsewhere ...
interface MyCoord {
    y: number;
}
const  myScreen: MyCoord ={x:3, y:4};
console.log(myScreen.x + myScreen.y);

