
var btn = document.querySelector("button");

function buttonColor(){
    btn.style.background = "red";
}

function hoverColor(){
    btn.style.background = "blue";
}

btn.addEventListener('click',buttonColor);

var img = document.querySelector("#puppy");

function newImage(){
    img.src="../img/archieSelfie.jpeg";
}

img.addEventListener('click', newImage);

