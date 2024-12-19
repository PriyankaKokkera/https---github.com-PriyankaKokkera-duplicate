// var fun=function(){
//     console.log("This is Nameless function")
// }
// fun();

// var add=function(num1,num2){
//     console.log(num1+num2)
// }
// add(4,8);

// var add=function(num1,num2){
//     return num1+num2
// }
// console.log(add(4,8));
// var addedvalue=add(23,56)
// console.log(addedvalue)
// console.log(add)

// (function(){
//     console.log("This is IIFE");
// })();
// console.log("will it work");
// (function(){
//     console.log("This is IIFE");
// })();

// (function(num1,num2){
//     console.log(num1+num2);
// })(2,5);

// var add=(function(num1,num2){
//     return num1+num2;
// })(2,5);
// console.log(add);

// var add=((num1,num2)=>{
//         return num1+num2;
// })(2,5);
// console.log(add)

// var length=30;
// var areaofsquare=length**2;
// var breadth=10;
// var height=15;
// var areaoftriangle=0.5* breadth*height;
// var rad=20;
// var areaofcircle=3.142*(rad**2)
// var areaofunshadedregion=areaofsquare-(areaoftriangle+areaofcircle)
// console.log(areaofunshadedregion);


var areaofcircle=(rad)=>{
    return 3.14*(rad**2)
}
var cir=areaofcircle(20);
console.log(cir)

var areaoftriangle=(base,height)=>{
    return 0.5*base*height
}
var tri=areaoftriangle(10,15);
console.log(tri)

var areaooc=areaoftriangle+areaofcircle;
var areaofsquare=(side)=>{
    return side*side
}
var sqr=areaofsquare(30);
console.log(sqr);
console.log(sqr-areaooc);




