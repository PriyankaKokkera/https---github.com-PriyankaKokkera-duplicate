// document.body.style.backgroundImage="linear-gradient(45deg,red,purple)"

// var div=document.createElement("div")
// document.body.appendChild(div)
// div.style.width="300px"
// div.style.height="300px"
// div.style.backgroundColor="green"

var allforms=document.forms;
console.log(allforms)
allforms[0].elements[0].type="color"
allforms[0].elements[1].type="radio"
allforms[0].elements[2].type="checkbox"
allforms[1].elements[0].type="email"
allforms[1].elements[0].placeholder="enter email"
allforms[1].elements[1].type="password"
allforms[1].elements[1].placeholder="enter password"
allforms[1].elements[2].type="submit"
allforms[1].elements[2].value="Login"
allforms[1].action="https://www.instagram.com"


// allforms[2].elements[0].type="radio"

// document.getElementById("Male").innerHTML="Male"
// allforms[2].elements[1].type="radio"

// allforms[2].elements[2].type="radio"


var image=document.images;
console.log(image)
// img[0].src="../../asset/image/1.jpg"
// img[1].src="../../asset/image/2.jpg"
// img[2].src="../../asset/image/3.jpg"

// img[0].style.width="200px"
// img[1].style.width="200px"
// img[2].style.width="200px"

for(i=0;i<=image.length-1;i++)
{
    image[i].src=`../../asset/image/${i+1}.jpg`
    image[i].style.width="200px"
}

var anchor=document.anchors;
anchor[0].innerHTML="Facebook"

anchor[0].href="https://www.facebook.com"
anchor[1].innerHTML="Canva"
anchor[1].href="https://www.canva.com"
anchor[2].innerHTML="Instagram"
anchor[2].href="https://www.instagram.com"

console.log(document.title)
document.title="FacebookClone"
