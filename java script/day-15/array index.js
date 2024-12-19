// var arr=["red","blue","red","green","ert","ert","orange","red"]
// console.log(arr.indexOf("red"))
// console.log(arr.indexOf("red",1))
// console.log(arr.indexOf("red",3))
// console.log(arr.lastIndexOf("ert"))

// var arr=["red","blue","red","green","orange","red"]
// console.log(arr)
// var rearr=arr.reverse();
// console.log(rearr)

// var arr=["red","blue","red","green","orange","red"] 
// var str=arr.toString();
// str=arr.join(" ")
// str=str.replaceAll(","," ")
// console.log(str)

// var str=`She sells the seashells by the seashor
// The shells she sells are surely seashells
// so if she sells shells on the seashore
// i'm sure she sells seashore shells.`
// var arr=str.split(" ");
// arr=arr.reverse()
// console.log(arr)
// str=arr.join(" ")
// console.log(str)

// var arr=["red","blue","red","green","orange","red"]
// console.log(arr)
// arr.pop()
// arr.push("apple","mango","banana")
// arr.shift(); 
// arr.shift(); remove first element
// arr.unshift("apple","mango","banana",2)
// console.log(arr)

// var arr=["red","blue","red","green","orange","red"]
// var arr1=arr.slice(-6,4)
// console.log(arr1)

// var arr=["red","blue","red","green","orange","red"]
// var arr1=arr.splice(0,3)
// var arr1=arr.splice(-4,4)
// console.log(arr1)
// console.log(arr)

// var arr=[["a","b",["h","v",["g","k"]]],["b","c",[[4,[45],5]]],["c","d"],["d","e"]];
// var arr=["a","b",["h","v",[1,"w",[9,5,8]]],["g","k"],[1,2,3]];
// var arr1=arr.flat(2)
// var arr1=arr.flat(Infinity)
// console.log(arr1)
// // 
// var arr=["red","blue","red","green","orange","red"]
// console.log(arr.includes("red"))
// console.log(arr.find("red"))
// console.log(arr.includes("Red"))

// var arr=["c","d","e","q","s","b"]
// console.log(arr.sort())
// var arr=["aden","aero","aam","account"]
// console.log(arr.sort())

// var num=[71,79,771,80,63,64,617,234,567,3435,15]
// var sortednumber=num.sort(function(a,b){
// return a-b;
// return b-a;
// }
// );
// console.log(sortednumber)

// var num=[71,79,771,80,63,64,617,234,567,3435,15]
// var arr1=num.filter(function(num){
//     // return num>=70 && num<=300;
//     return num%2==0;
// })
// console.log(arr1)
// let colors = ["red", "green", "blue"];

// colors.forEach(function(color,  array,index1) {
//   console.log(`Index1: ${index1}, Color: ${color}, Array: ${array}`);
// });
const floatingNum = "qwe15.20";
const parsedIntNum = parseInt(floatingNum);

console.log(typeof(parsedIntNum));
console.log(parsedIntNum);
// expected outcome: 15
