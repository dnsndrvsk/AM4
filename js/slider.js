var sliderModule = (function() {
  
  function startChangingSlides() {
    var checkedImage;
    var nextImage;

    setInterval(function() {
    checkedImage = document.querySelector('.slider input[type="radio"]:checked');

    nextImage = document.querySelector('.slider input[type="radio"]:checked').nextElementSibling;

    if (!nextImage.classList.contains('slide-changer')) {
      nextImage = document.querySelector('.slider #image-1');
    }

    nextImage.checked = true;

    }, 5000);
  }
  
  return {
    startChangingSlides: startChangingSlides
  }
  
}());

sliderModule.startChangingSlides();