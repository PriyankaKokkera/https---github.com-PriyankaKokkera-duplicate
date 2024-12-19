const text=document.getElementById("abc");
const button67=document.getElementById("button1");
const list=document.getElementById("list");
button67.addEventListener('click',function(){
    const inputText = text.value.trim();
    if (inputText !== '') {
        
        const newText = document.createElement('li');
        newText.textContent = inputText;
        list.appendChild(newText);
        text.value = '';
    } else {
        alert('Please enter some text.');
    }


   
})