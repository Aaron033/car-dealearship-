var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); 
}


document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

document.querySelector("#nav-toggle").addEventListener("click", menuNav);

function menuNav() {
  document.querySelector(".tabs").style.height = "200px";
  
}

let navBar = document.querySelector("#nav-toggle");

// onclick = function() {
//   if(navBar.className == "open") {
//    navBar.className
//   }
// }