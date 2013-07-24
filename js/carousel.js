var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

  carousel.style.marginLeft = 0;

    next.onmouseover = function() {
      this.style.opacity = .2;
    };

    next.onmouseout = function() {
      this.style.opacity = .5;
    };

    next.onclick = function(){
      if (carousel.style.marginLeft === "0px") {
        carousel.style.marginLeft = "-612px";
      } else if (carousel.style.marginLeft === "-612px") {
          carousel.style.marginLeft = "-1224px";
     };

    previous.onmouseover = function() {
      this.style.opacity = .2;

    previous.onmouseout = function() {
      this.style.opacity = .5;

    previous.onclick = function(){
    if (carousel.style.marginLeft === "0px") {
      carousel.style.marginLeft = "612px";
    } else if (carousel.style.marginLeft === "612px") {
        carousel.style.marginLeft = "1224px";
      };
    };
  };
  // next.onclick = function(){
  // document.getElementById("carousel").style.marginLeft = "-610px";
  // };

  // previous.onclick = function(){
  //  document.getElementById('carousel').style.marginLeft += 600 + 'px';


// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images
