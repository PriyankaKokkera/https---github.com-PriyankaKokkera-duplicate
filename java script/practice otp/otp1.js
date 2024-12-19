var otp=0;
function generateotpDisplay(){
document.getElementById("otpcontainer").style.display="block"

var num1=Math.flor(Math.random()*10)
var num2=Math.flor(Math.random()*10)
var num3=Math.flor(Math.random()*10)
var num4=Math.flor(Math.random()*10)
otp=`${num1}${num2}${num3}${num4}`
document.getElementById("displayOTP").innerHTML=otp

}
