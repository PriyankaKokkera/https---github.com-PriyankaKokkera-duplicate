var cir=document.querySelector("div");
cir.style.width="200px";
cir.style.height="200px";
cir.style.borderRadius="50%";
cir.style.backgroundColor="red"
function fun(){
function stepone(){
    cir.style.transform="translate(92vw,0vh)"
    cir.style.transition="all 2s"
}
setTimeout(stepone,2000);
function stepTwo(){
    cir.style.transform="translate(92vw,85vh)"
    cir.style.transition="all 2s"
}
setTimeout(stepTwo,4000);
function stepThree(){
    cir.style.transform="translate(0vw,85vh)"
    cir.style.transition="all 2s"
}
setTimeout(stepThree,6000);
function stepFour(){
    cir.style.transform="translate(0vw,0vh)"
    cir.style.transition="all 2s"
}
setTimeout(stepFour,8000);

}
fun()
setInterval(fun,10000)



// var num=60;
// function startcount(){
//     if(num>0)
//     {
//         num--;
//         document.getElementById("res").value=num;
//         setTimeout(startcount,1000)
        
//     }
// }


// var num=60;
// var timer;
// var Isrunning=false;
// function startcount(val){
//     if(!Isrunning && val=="start"){
//         Isrunning=true;
//         countDown();
//     }
// }
// function countDown(){
//     if(num>0 && Isrunning){
//         num--;
//         document.getElementById("res").value=num;
//         timer=setTimeout(startcount,100)
//     }
// }
// function stopcount(){
    
//         Isrunning=false;
//         clearTimeout(timer);
    
// }
// function resetcount(){
    
//         Isrunning=true;
//         clearTimeout(timer);
//         num=60;
//         document.getElementById("res").value=num;


// }


