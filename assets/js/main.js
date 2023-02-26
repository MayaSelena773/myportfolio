//Dropdown navbar

  $(document).ready(function(){
    $(".dropdown-trigger").dropdown();
  });


//Parallax
/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });
*/
  $(document).ready(function(){
    $('.parallax').parallax();
  });

//Carousel
/*  document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
*/

$(document).ready(function(){
  $('.carousel').carousel();
});
