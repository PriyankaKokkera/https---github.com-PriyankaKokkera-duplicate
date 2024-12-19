var noon=12;
var partytime;
var wakeup=7;
var lunch=12;
var nap=lunch+2;
var evening=18;


var currentTime=function(){
    var curtime=document.getElementById('clock');
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var meridian="AM";
    if(hours>=noon){
       meridian="PM"

    }
    if(hours>noon){
        hours=hours-12;
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    var clocktime=hours+":"+minutes+":"+seconds+" "+meridian+"!";
    clock.innerText=clocktime;

};
var updateclock=function(){
    var time1=new Date().getHours();
    var messagetext;
    var image="../../../asset/image/vishwaksen11620112567.jpg";
    var timeeventJS=document.getElementById("timeevent");
    var localimageJS=document.getElementById("localimage");
    if(time1==partytime){
        
        image="../../../asset/image/1.jpg";
        messagetext="Let's Party"
    }
    else if(time1==wakeup){
        image="../../../asset/image/3.jpg";
        messagetext="Let's WakeUp"
    }
    else if(time1==lunch){
        image="../../../asset/image/4.jpg";
        messagetext="Let's have lunch"
    }
    else if(time1==nap){
        image="../../../asset/image/bus.png";
        messagetext="Let's have nap"
    }
    else if(time1<noon){
        image="../../../asset/image/truck.png";
        messagetext="Good Morning"
    }
    else if(time1>=evening){
        image="../../../asset/image/train.png";
        messagetext="Good evening"
    }
    else{
        image="../../../asset/image/bike (6).png";
        messagetext="Good Afternoon"
    }
    console.log(messagetext);
    timeeventJS.innerText=messagetext;
    localimageJS.src=image;

    currentTime();
    


}
updateclock();
var oneSecond = 1000;
setInterval( updateclock, oneSecond);





