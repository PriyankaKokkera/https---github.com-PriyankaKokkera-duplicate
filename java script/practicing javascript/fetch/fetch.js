// (function() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//     const dataContainer = document.getElementById('data-container');

//     function fetchData() {
//         fetch(apiUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 displayData(data);
//             })
//             .catch(error => {
//                 console.error('There has been a problem with your fetch operation:', error);
//             });
//     }

//     function displayData(data) {
//         dataContainer.innerHTML = ''; // Clear previous data
//         data.forEach(item => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');
//             postElement.innerHTML = `
//                 <h2>${item.title}</h2>
//                 <p>${item.body}</p>
//             `;
//             dataContainer.appendChild(postElement);
//         });
//     }

//     // Fetch data every 5 seconds
//     setInterval(fetchData, 5000);
//     fetchData(); // Initial fetch
// })();


// const data = {
//     // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     // body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     userId: 1,
//     };
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//     method: "DELETE",
//     body: JSON.stringify(data),
//     headers: {
//     "Content-type": "application/json",
//     },
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

    // const Id = 1; // ID of the user to delete

// fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
//   method: "PUT",
//   body:JSON.stringify(
//     {
//         "title":"lorem"


//     }
//   )

//   ,
//   headers: {
//     "Content-type": "application/json", // Optional
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error(`Failed to delete user with ID ${Id}`);
//     }
//   })
//   .then((data) => {
//     console.log("Updated post:", data)})
//   .catch((error) => console.error("Error:", error));



    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((data) => console.log(data));

    // fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    //     method: "PUT", // Correct method to update a resource
    //     body: JSON.stringify({
    //       "title": "lorem" // Data to update
    //     }),
    //     headers: {
    //       "Content-type": "application/json", // Specifies that we're sending JSON data
    //     },
    //   })
    //     .then((res) => {
    //       if (res.ok) {
    //         // If the request was successful, log the updated post data
    //         return res.json(); // Parse the JSON response
    //       } else {
    //         throw new Error('Failed to update post');
    //       }
    //     })
    //     .then((data) => {
    //       console.log("Updated post:", data); // Log the updated post data
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error); // Log any errors
    //     });
    // Select all <p> tags inside the #container
const allParagraphs = document.getElementsByClassName("text");
allParagraphs[1].style.color="red";
// document.write(allParagraphs); // Output: 3
// allParagraphs.forEach((par)=>{
//     par.style.color="yellow";
// });
// Select all <p> elements with the class "text" inside the #container
// const allParagraphs = document.querySelectorAll('#container .text');

// Loop through the NodeList and set the text color to yellow
// allParagraphs.forEach((paragraph) => {
//   paragraph.style.color = "yellow";
// });

// Display a message indicating the operation is complete
document.write("The text color of the selected paragraphs has been changed to yellow.");



// Loop through the NodeList and log each <p>'s text content
// allParagraphs.forEach((p) => {
//   console.log(p.textContent);
// });

// Output:
// "First paragraph"
// "Second paragraph"
// "Third paragraph"

// Select all elements with the class 'text'
// const textParagraphs = document.querySelectorAll('.text');
// console.log(textParagraphs.length); // Output: 2

      