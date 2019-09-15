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



const carouselSlide = document.querySelector('.subcontainer'); 
const carouseldiv = document.querySelectorAll('.slide'); 

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

//We start from the first image 
let counter = 1; 
const size = carouseldiv[0].clientWidth; 


carouselSlide.style.transform = 'translateX(' +(-size + 246 * counter) + 'px)'; 

//Button listeners

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transition ='translateX(' + (-size * counter) + 'px)';
  counter++; 
 carouselSlide.style.transform = 'translateX(' +(-size  + 246 * counter)+'px)';
})


prevBtn.addEventListener('click', () => {
  carouselSlide.style.transition ='translateX(' + (-size * counter) + 'px)';
  counter--; 
 carouselSlide.style.transform = 'translateX(' +(-size  - 246 * counter)+'px)';
})

carouselSlide.addEventListener('transitionend', () => {
  console.log(carouseldiv[counter].id === 'lastClone'){
    
    counter = carouseldiv.length -2 ;
    carouselSlide.style.transform = 'translateX(' +(-size  + 246 * counter)+'px)';
  }

})