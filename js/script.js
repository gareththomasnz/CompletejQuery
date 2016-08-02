$(function() {

  // effects fade & slide
  
   //$(".red-box").fadeTo(1000, 0.1);
   //$(".red-box").slideUp(2000);
   //$(".red-box").slideDown(2000);
   //$(".green-box").fadeTo(1000, 0.5).slideUp(5000);
   //$(".blue-box").fadeToggle(1000);
   //$(".blue-box").fadeToggle(1000).slideUp(1000);
   //$("p").hide().fadeIn(1000);
   
   $(".blue-box").animate({
        "margin-left": "200px",
        "opacity": "0",
        "height": "50px",
        "width": "50px",
        "margin-top": "25px"
   },1000);
   
   $(".red-box").animate({
        "width": "120px",
        "height": "120px"
   },1000);   
   
   $("p").animate({
        "font-size": "24px"
        },1000);
   
   $("h1").animate({
        "font-size": "54px"
        },1000);
   
});