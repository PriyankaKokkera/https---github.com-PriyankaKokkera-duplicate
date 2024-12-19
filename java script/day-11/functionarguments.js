// function add(num1,num2)
// {
//     console.log(num1+num2)
// }
// add(4,5)

// function circle(rad)
// {
//     var area =3.14*(rad**2)
//     console.log(`The area of the circle with the rad of ${rad} is ${area}`)
// }
// circle(6)
// function triangle(base,height)
// {
//     var area =0.5*(base*height)
//     console.log(`The area of the triangle is ${area}`)
// }
// triangle(6,4)      **** funtion with arguments ****



// function fun(){
//     console.log("statement")
//     return "values";

// }
// // console.log(fun())
// fun()    **** funtion with returntypes ****

// function rateOfInt(pri,time,rain)
// {
//     console.log(`The amount I took:${pri} ₹`)
//     console.log(`For the Duration of ${time} years`)
//     console.log(`With the interest of ${rain}`)
//     var roi=(pri*time*rain)/100;
//     console.log(`You have pay the Intrest amount of  ${roi} ₹`)
//     var totalamount=pri+roi;
//     var montlyEmi=totalamount/(time*12)
//     console.log(`The monthly Emi is giong to be ${montlyEmi}`)
//     return totalamount;
// }
// var icici=rateOfInt(500000,3,4)
// console.log(icici) **** funtion with arguments and returntypes ****


// const add=()=>{
//     console.log(45+55)
// }
// add()

// const sub=()=>console.log(45-55)
// sub();

// const add=(num1,num2)=>{
//     console.log(num1+num2)
// }
// add(24,56)

// const circle=rad=>console.log(3.142*(rad**2))
// circle(6)

// var fun=()=>{
        
//         return "values";
// }
// console.log(fun())


var rateOfInt=(pri,time,rain)=>
{
console.log(`The amount I took:${pri} ₹`)
console.log(`For the Duration of ${time} years`)
console.log(`With the interest of ${rain}`)
var roi=(pri*time*rain)/100;
console.log(`You have pay the Intrest amount of  ${roi} ₹`)
var totalamount=pri+roi;
var montlyEmi=totalamount/(time*12)
console.log(`The monthly Emi is giong to be ${montlyEmi}`)
return totalamount;
}
var icici=rateOfInt(500000,3,4)
console.log(icici)




  
