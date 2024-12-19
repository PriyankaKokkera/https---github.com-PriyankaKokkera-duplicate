// function reverse(num){
//     var rev=0;
//     while(num!=0){
//         let ld=num%10;
//         rev=rev*10+ld;
//         num=Math.floor(num/10);
        
//     }
//     return rev;

// }
// var result=reverse(123);
// document.write(result);


// function fun1(str){
//     for(let i=0;i<=str.length-1;i++){
//         var str2=""
//         for(let j=i;j<=str.length-1;j++){
//             str2=str2+str[j];
//            console.log(str2);

//         }
        
//     }
// }
// fun1("dog");

// function fun1(str){
//     for(let i=0;i<=str.length-1;i++){
//         // var str2="";     
//         for(let j=i+1;j<=str.length-1;j++){
//         var str2="";
//         let t=0;
//             if(str[j]<str[i]){
//                 t=str[i];
//                 str[i]=str[j];
//                 str[j]=t;
                
                
//                 // console.log(str2)

//             }
//             // str2=str+str[i];
           
//             }
//             // str2=str+str[i];
//             // console.log(str2);


        
        
       
//     }
// }
// fun1("doga");

// var fun3=function fun1(str){
//     var arr=str.split(" ")
//     return arr;

// }
// var fi=fun3("qwer fdsgh bfhjjie dmfn")
// var fu=function fun2(fi){
//     for(let i=0;i<=fi.length-1;i++){
//         var f=fi[i].charAt(0).toUpperCase();
//         return f;

        
//     }

// }
// console.log(fu);

// function fun1(n1,n2=1,...a){
//    var p=n1*n2;;
//    for(x of a){
//     p=p*x;
//    }
//    console.log(p);
// }
// fun1(4,2,2,3,4,5,6);
// var arr=[2344,568,1324,67889];
// arr.forEach()
// var rew=(s,i,arr)=>{
//     var sr=s/10;
//     arr[i]=sr+s;

// }
// console.log(arr);
// var a=[3,4,6,87,9,6]
// var s=new Set(a);
// s.add(78)
// console.log(s)

// var str="poiufgsy"
// var s=new Set(str);
// s.add(78)
// console.log(s)

// var str="poiufgsy"
// var s=new Set(str);
// var5=s.delete('i')
// console.log(var5)

// var str="poiufgsy"
// var s=new Set(str);
// var5=s.has('i')
// console.log(var5)

// function myFunction(str)
// {

// console.log( str.slice(-3));
// console.log(str)
// }

// myFunction("priyanka")

// function myFunction(a, b)
// {
// let bo=false;
// var str;
// for(let i=0;i<=a.length-1;i++)
// {
// for(let j=0;j<=b.length-1;j++)
// {
// if(a[i]==b[j]){
// bo=true;
// break;
// }
// }
// }

// if(bo==true){
// str=a+b;
// console.log(str);
// }
// else{
// str=b+a;
// console.log(str);
// }
// }



// myFunction("wertynm","123456789");

// function userName(name,age){
//     console.log(`Name: ${name} ,Age: ${age}`);
// }
// // function userAge(age){
// //     console.log(`Age: ${age}`);
// // }
// function userInput(callbck,){
//     let name1;
//     let age1;
//     setTimeout(function(){
//         name1="priyanka";
//         age1=23;
//         callbck(name1,age1);
//         // callbck1(age1);

//     },500);
// }
// userInput(userName);

    // for(let i=0;i<=10;i++){
       
    //     setTimeout(()=>{
    //         console.log(i);
    //     },i*1000);
    // }
    
    
// function fun1(){
//     console.log("hello")
// }
// function fun2(callnck){
//     let i=0;
//     setTimeout(()=>{
//         while(i<10){
        

        
//         callnck();
       
//     }
        
//     },3000,i++);
  

// };
// fun2(fun1);


let a=[1,2,4,5];
let b={"fgh":"sd","ds":23,"cds":"ds"}
let r=a+b;
console.log(r);