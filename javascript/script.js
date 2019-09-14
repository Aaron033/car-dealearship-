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



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}



function showDivs(n) {
  let i ; 
  let x = document.getElementsByClassName("slide"); 
 if(n > x.length) {
   slideIndex = 1
 }

 if (n < 1) {
   slideIndex = x.length
 }
 x[slideIndex-1].style.display = "block"; 
 
}