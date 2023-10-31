var acc = document.getElementsByClassName("main_accordion");

var panel = document.getElementsByClassName("panel");


for(var j = 0; j < acc.length; j++){
    panel[j].style.display = "none";
}

console.log(acc[0]);

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel 
    */
    var panel = this.lastElementChild;
    console.log(panel);
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}