// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000); 
// }


(function() {
  let burger = document.querySelector('.burger'); 
  let nav = document.querySelector('#' +burger.dataset.target); 

  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active'); 
    nav.classList.toggle('is-active');
  });
})();