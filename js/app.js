var colorstate = "white";
var s = ( $(window).height() * 0.8) + 270;
$(window).scroll(function() {

  if ( $(window).scrollTop() < $(window).height() || ($(document).height() - $(window).scrollTop()) < s) {
    if(colorstate == "black") {
      console.log("change to white");
      $(".menuicon").removeClass("black");
      colorstate = "white";
    }
  } else {
    if(colorstate == "white") {
      console.log("change to black");
      $(".menuicon").addClass("black");
      colorstate = "black";
    }
  }

});

var navstate = "notvisible"
$('.menuicon').on("click", function() {
  if(navstate == "notvisible") {
    $("nav").addClass("navmove");
    $(".menuicon").css("left", "210px");
    navstate = "visible";
  } else {
    $("nav").removeClass("navmove");
    $(".menuicon").css("left", "10px");
    navstate = "notvisible";
  }
});