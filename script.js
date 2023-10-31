alert("script js is loaded");

let varName = 30;

if(varName > 10){
    alert('greater');
} 

let title = document.getElementById("header");

function changeTitle(){
    title.innerText = "Hiiii";
    title.style.color = "blue"
}

let clickMeButton = document.getElementById("insta");

clickMeButton.addEventListener("mouseover", changeTitle);