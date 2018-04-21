var slideIndex = 1;
showSlides(slideIndex);

function plusSlides (n){
  showSlides(slideIndex += n);
  setTimeout(autoSlideDelay, 8000);
  autoSladeActive = false;
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length;
  }
  for (i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var autoSladeActive = true;

function plusAutoSlides (n){
  showSlides(slideIndex += n);
}

function NextSlideAuto (){
  if (autoSladeActive){
    plusAutoSlides(1);
  }

  setTimeout(NextSlideAuto, 15000);
}
setTimeout(NextSlideAuto, 15000);

function autoSlideDelay () {
  autoSladeActive = true;
}
