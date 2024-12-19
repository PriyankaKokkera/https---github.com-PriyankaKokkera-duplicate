// var val=12;
// var am_pm="Am";
// if(val>=12)
// {
//     am_pm="Pm";
//     if(val>=13)
//     {
//         val-=12;
//     }
    
// }
// if(val==0)
// {
//     val=12;
// }
// console.log(val+am_pm); if statement

// var val=-10;
// if(val>=0){
//     console.log(val+" is positive");

// if(val%2==0)
// {
//     console.log(val+" is even number");
// }
// }
// else{
//     console.log(val+" is negative");
// }    if-else

//write a javascript program that prints the numbers from 1 to 100 but for multiple of 3 print frizz instead of number and for multiple of 5 print buzz,for number which are are multiple of both 3 and  5 print fizz 

var val=46;
if(val<=100)
{
    if(val%3==0 && val%5==0)
    {
        console.log("fizz");
    }
    else if(val%5==0)
    {
        console.log("buzz");
    }
    else if(val%3==0)
    {
        console.log("frizz");
    }
    else
    {
        console.log("NA2");
    }
}
else{
    console.log("Not available")
}
