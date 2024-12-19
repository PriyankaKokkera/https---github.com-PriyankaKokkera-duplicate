// var a=prompt("enter")
// var b=prompt("enter")
// var c=prompt();
// if(c==1)
// {
//     var d=Number(a)+Number(b);
//     document.write(d);
// }
// else if(c==2)
// {
//     var d=Number(a)-Number(b);
//     document.write(d);
   
// }
// else if(c==3)
// {
//     var d=Number(a)*Number(b);
//     document.write(d);
   
// }
// else if(c==4)
// {
//     var d=Number(a)/Number(b);
//     document.write(d);
   
// }
// else if(c==4)
// {
//     var d=Number(a)%Number(b);
//     document.write(d);
       
// }


var rep;
do{
var a=prompt("enter")
var b=prompt("enter")
var c=prompt("enter");
if(c=="add")
{
    console.log(Number(a)+Number(b));
    rep=confirm("do you want to repeat")
    
}
else if(c=="sub")
{
    console.log(a-b);
    rep=confirm("do you want to repeat")
    
    
   
}
else if(c=="mul")
{
    console.log(a*b);
    rep=confirm("do you want to repeat")
    
   
}
else if(c=="div")
{
    console.log(a/b);
    rep=confirm("do you want to repeat")
    
   
}
else if(c=="mod")
{
    console.log(a%b);
    rep=confirm("do you want to repeat")
    
       
}
else
{
    console.log("enter valid operation");
    rep=confirm("do you want to repeat")
}
}while(rep==true){

}
