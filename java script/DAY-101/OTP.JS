var otp=0;
function generateoptdisplay(){
    document.getElementById("otpcontainer").style.display="block";
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    var num5=Math.floor(Math.random()*10);
    otp=`${num1}${num2}${num3}${num4}${num5}`;
    document.getElementById("displayOTP").innerHTML=otp

   
}