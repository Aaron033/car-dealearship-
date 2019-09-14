let i = 0; 
let images = []; 
let time = 3000; 

images[0] = "image1.jpg"; 
images[1] = "images2.jpg"; 
images[2] = "images2.jpg"; 
images[3] = "images2.jpg"; 

function changeImg() {
    document.slide.src = image[i]; 

    if(i < images.length - 1) {
        i++; 
    }else {
        i = 0; 
    }
    setTimeout("changeImg()", time);
}
