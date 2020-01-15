var myIndex = 0;
carousel();

function carousel() {
  var i;
  //Checking all of slides 
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  