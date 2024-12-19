// function fun1(){
//     console.log("This is callback function")
// }
// function fun3(){
//     console.log("This is callback function 2")
// }
// function fun2(callback1,callback2){
//     console.log("This is higher order function")
//     callback1();
//     callback2();
// }
// fun2(fun1,fun3)

// var fun1=function(callback){
//     console.log("This is higher order function")
//     callback();
// }
// fun1(function(){
//     console.log("This is callback function 2")
// })
 var fun1=(callback)=>{
    console.log("This is higher order function")
    callback();
 }
 fun1(()=>{
    console.log("This is callback function 2")
 })