// var arr=["apple","red","pineapple","yellow","papaya","orange","orange","orange","grapes","black","drafru","pink"]
// console.log(arr)
// var arr1=arr.filter((arr)=>{
//     return arr.length>=5;

// });
// console.log(arr1);

// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// var arr1=arr.filter((arr)=>{
//     return arr%2==0;
// })
// console.log(arr1)
// var arr2=arr.filter((arr)=>{
//     return arr%2==0
// })
// console.log(arr2)


// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// console.log(arr)
// var arr1=arr.map((arr)=>{
//     return arr+2;
// })
// console.log(arr1)

// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// console.log(arr)
// for(i=0;i<=arr.length-1;i++)
// {
// if(arr[i]%2!=0){
//     arr[i]=arr[i]+1;

// }
// }
// console.log(arr)

// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// console.log(arr)
// var arr1=arr.map((arr)=>{
//     if(arr%2==0)
//     {
//         return arr
//     }
//     else{
//         return arr+1
//     }
// })
// console.log(arr1)

// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// for(i in arr)
// {
//    console.log(arr[i])
//    console.log(i)
// }

// for(i of arr)
// {
//     console.log(i)
// } 

// var arr=[2,4,6,1,345,76,3,8,9,34,357,8,62]
// var val=arr.values();
// var val=arr.keys();
//  var val=arr.entries();
// console.log(val)
// for(i of val){
//     console.log(i)
// }


// var arr=[3,4,6,1,345,76,3,8,9,34,357,8,62]
// var arr1=arr.some(function(arr){
//     return arr%2==0
// })
// var arr1=arr.every(function(arr){
    // return arr%2==0
// })
// console.log(arr1)


var arr=[2,4,7,"apple",98,"red",false,undefined]
// var arr1=arr.find(function(arr){
    var arr1=arr.findIndex(function(arr1){
    return arr1=="red"
//return (typeof arr)=="string"
// return (typeof arr)=="boolean"
// return (typeof arr)=="undefined"

})
// })
console.log(arr1)

// for( let i of arr){
//     if(typeof(i)=="undefined"){
//         console.log(i);

//     }
// }
// console.log(arr);

// var arr = [2, 4, 7, "apple", 98, "red", false, undefined];

// for (let i of arr) {
//     if (typeof(i) == "string") {
//         console.log(i);
//     }
// }


