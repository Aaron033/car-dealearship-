

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
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

function myFunction(x) {
    x.classList.toggle("change");
  }

 
  let ford = document.querySelector(".ford");


for(let i = 0; i < ford.length; ++i){
    fo = 0;
    fo += ford[i] 
    
}
document.querySelector(".show-ford").innerHTML = "("+ fo + ")";
