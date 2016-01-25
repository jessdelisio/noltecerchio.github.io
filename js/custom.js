
/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // PRELOADER
  $(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
  });

  // // HOME SLIDESHOW
  // $(function()
  // {
  //   jQuery(document).ready(function() {
  //   $('#home-slideshow').backstretch([
  //      "images/home-slideshow1.jpg",
  //     //  "images/home-slideshow2.jpg",
  //     //   "images/home-slideshow3.jpg",
  //       ],  {duration: 2000, fade: 750});
  //   });
  // })

  // WOW ANIMATED
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

});
