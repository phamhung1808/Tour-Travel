/* AutoText */
var typed = new Typed('.text-runspeed', {
    strings: ["San Francisco.", "Paris.", "New Zealand.", "Maui.","London."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


/* JS.AutoSlideShow */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("active");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


/* AutoNumber */

/* function ready() {
    ready = ".number".counterUp({
        delay: 10,
      time: 1200
    });
};

ready(); */


/* main-content slides */
