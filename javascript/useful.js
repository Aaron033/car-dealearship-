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
        //if the image is less than the array 
    }else {
        i = 0; 
        //if the image is greater than the array it will be back to 0 
    }
    setTimeout("changeImg()", time);
}
