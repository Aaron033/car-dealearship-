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





$(document).ready(function() {
  x= 0 ; 

  $('.btn-next').click(function(){
    x = (x<=300)?(x+100):0; 
    $('subcontainer').css('left', -x+"%"); 
  })



  $('.btn-prev').click(function(){
    x = (x>=100)?(x-100):400; 
    $('subcontainer').css('left', -x+"%"); 
  })

})