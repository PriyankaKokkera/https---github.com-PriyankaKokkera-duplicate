
var input=document.getElementById("box1");
var button67=document.getElementById("button12");
button67.addEventListener('click',function fun2(){
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    button67.classList.toggle("suc");
    button67.innerHTML="Copied";
    setTimeout(function fun3(){
        button67.classList.toggle("suc");
    button67.innerHTML="Copy";

    },2000);
    // fun3();

})
fun2();


var input = document.getElementById("box1");
var button67 = document.getElementById("button12");

button67.addEventListener('click', () => {
    // Validate input
    if (input.value.trim() === "") {
        alert("Please enter text to copy.");
        return;
    }

    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(() => {
            button67.classList.toggle("suc");
            button67.innerHTML = "Copied";

            setTimeout(() => {
                button67.classList.toggle("suc");
                button67.innerHTML = "Copy";
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    } else {
        console.warn("Clipboard API not supported. Falling back to execCommand.");
        input.select();
        input.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        button67.classList.toggle("suc");
        button67.innerHTML = "Copied";

        setTimeout(() => {
            button67.classList.toggle("suc");
            button67.innerHTML = "Copy";
        }, 2000);
    }
});


