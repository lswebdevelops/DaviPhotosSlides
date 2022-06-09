
var myImages= [
    "imag00.jpg",
    "imag1.jpg",
    "imag2.jpg",
     "imag3.jpg",
      "imag4.jpg",
       "imag5.jpg",
        "imag6.jpg",
         "imag7.jpg",
          "imag8.jpg",
           "imag9.jpg",
            "imag10.jpg",
             "imag11.jpg",
              "imag12.jpg"
                ];
var currentImage = 0;

// next button
document.getElementById('next').onclick = nextPhoto;

function nextPhoto(){
currentImage ++;
if(currentImage > myImages.length-1) {
    // if(currentImage > 4) { >> workks too
    currentImage =0;
}
document.getElementById('myimage').src = myImages[currentImage];

}
// previous button
document.getElementById('previous').onclick = previousPhoto;

function previousPhoto(){
currentImage --;
if(currentImage <0) {
    currentImage =12;
}
document.getElementById('myimage').src = myImages[currentImage];

}


