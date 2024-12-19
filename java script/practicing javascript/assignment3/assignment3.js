// const image1=document.getElementById("secimg");
// image.src="../../../asset/image/1.jpg";
// window.onload= function fun1(){
//     let i=0;
//     var image=document.getElementById("firstimg12");
//     function changeimage(){

    

// if(i<5){
//     image.src=`../../../asset/image/bike (${i}).png`;
//     i++;
//     setTimeout(changeimage, 2000);

// }
// if (i < 5) {
//     // Update image source using template literals
//     image.src = `../../../asset/image/bike (${i}).png`;
//     i++; // Increment counter
// } else {
//     i = 0; // Reset counter to 0 after it reaches 5
//     image.src = `../../../asset/image/bike (${i}).png`; // Show bike (0).png
// }
// setTimeout(changeimage, 2000)
// }
// changeimage();


// }



// setTimeout(fun1, 1000);
// function fun2(){


//     var image1=document.getElementById("firstimg12");
//     image1.src="../../../asset/image/3.jpg";
//     }
function addTask() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    // Ensure the input field is not empty
    if (taskInput.value.trim() !== "") {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        
        // Delete the task when the button is clicked
        deleteButton.onclick = function() {
            li.remove();
        };

        // Mark the task as completed when clicked
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);
        
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
