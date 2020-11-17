/*  header
-------------------------------------------------------*/

var header = document.getElementById('header');
var submenu = document.getElementById('navi-submenu-head');
header.onclick = function() {
  this.classList.toggle("is-open");
  document.getElementById("navigation").classList.toggle("is-open");
  document.getElementById("toggle").classList.toggle("is-active");
};


/*  page top
-------------------------------------------------------*/

var px_change = 1;
window.addEventListener('scroll', function(e) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrollTop > px_change ) {
    document.getElementById( "pagetop" ).classList.add( "is-show" );
  } else {
    document.getElementById( "pagetop" ).classList.remove( "is-show" );
  }
});

/*  MoveTo
-------------------------------------------------------*/
import MoveTo from "moveto"

document.addEventListener('DOMContentLoaded', function(){
  const moveTo = new MoveTo();
  const triggers = document.getElementsByClassName('pagetop');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});


/*  scroll animation
-------------------------------------------------------*/
import ScrollReveal from "scrollreveal"

ScrollReveal().reveal('.fade-left', {
  origin: 'left',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: false,
  viewFactor: 0,
  mobile: false,
});
ScrollReveal().reveal('.fade-up', {
  origin: 'bottom',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: false,
  viewFactor: 0,
  mobile: false,
});
