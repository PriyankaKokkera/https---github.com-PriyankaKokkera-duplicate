// var heading=document.getElementsByTagName("h1");
// heading[0].innerHTML="heading";
// heading[1].innerHTML="heading1";
// heading[2].innerHTML="heading2";


// var heading1=document.getElementsByTagName("h2");
// heading1[0].innerHTML="heading1 1";
// heading1[1].innerHTML="heading1 2";

// var heading=document.getElementsByTagName("span");
// heading[0].innerHTML="span";
// heading[1].innerHTML="span1";
// heading[2].innerHTML="span2";

// var heading1=document.getElementsByClassName("heading")
// heading1[0].innerHTML="class 1";
// heading1[1].innerHTML="class 2";
// heading1[2].innerHTML="class 3";

// var heading1=document.getElementsByClassName("heading2")
// heading1[0].innerHTML="class 4";
// heading1[1].innerHTML="class 5";

// var elements=document.getElementsByName("ele")
// console.log(elements)
// elements[0].innerHTML="This is by using Name attribute158"
// elements[1].innerHTML="This is by using Name attribute12"

// document.querySelector("#heading").innerHTML="This is by using id selector"
// document.querySelector(".heading2").innerHTML="This is by using class selector"
// document.querySelector("h2").innerHTML="This is by using Tag selector"



// var byId=document.querySelectorAll("#heading");
// console.log(byId)
// byId[0].innerHTML="ById"
// byId[1].innerHTML="ById"
// byId[2].innerHTML="ById"

// var byClass=document.querySelectorAll(".heading2");
// console.log(byClass)
// byClass[0].innerHTML="Byclass"
// byClass[1].innerHTML="Byclass"
// byClass[2].innerHTML="Byclass"
   


// var e=document.querySelector("parent.child1");
// var d=e[1];
// document.write(e);
// const userConfirmed = confirm("Are you sure?");
// if (userConfirmed) {
//     console.log("User clicked OK.");
// } else {
//     console.log("User clicked Cancel.");
// }

// Get the modal element
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for close button
closeBtn.addEventListener("click", closeModal);

// Event listener to close modal when clicking outside it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Example usage
openModal(); // Call this function to show the modal

