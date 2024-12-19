const iputBox=document.getElementById("inputBox");
const listcontainer=document.getElementById("listContainer");
function AddTask(){
    if(iputBox.value === ""){
        alert("You must write something")
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=iputBox.value;
        listcontainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)

     }
     iputBox.value=""
     saveData();

    
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function shawTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
shawTask();
