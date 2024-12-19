// var divTag=document.createElement("div");
// document.getElementById("body").appendChild(divTag);
// divTag.style.width="300px"
// divTag.style.height="300px"
// divTag.style.backgroundColor="red"

// var divTag1=document.createElement("div")
// divTag.appendChild(divTag1)
// divTag1.style.width="100px"
// divTag1.style.height="100px"
// divTag1.style.backgroundColor="blue"

var table=document.createElement("table");
document.getElementById("body").appendChild(table);
var rows=[];
var th=[];
for(i=0;i<=4;i++)
{
    rows[i]=document.createElement("tr");
    table.appendChild(rows[i]);
    for(j=1;j<=2;j++){
        th[j]=document.createElement("th");
        if(i>0){
            rows[i].appendChild(th[j]); 
        }
        th[j].style.border="2px solid black"
        table.style.border="2px solid black";
        

    }
}

var oneth=document.createElement("th")
rows[0]=appendChild(oneth)
oneth.colSpan="2"
table.style.borderCollapse="collapse"

var allthe=document.getElementsByTagName("th")
console.log(allthe)
allthe[0].innerHTML="Emp Details"
allthe[1].innerHTML="Emp Name"
allthe[2].innerHTML="Priyanka"
allthe[3].innerHTML="Gender"
allthe[4].innerHTML="Female"
allthe[5].innerHTML="salary"
allthe[6].innerHTML="4.5LPA"
allthe[7].innerHTML="Dep"
allthe[8].innerHTML="Testing"