
$(function() {

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });

/* keeping the button reference section see HTML, keeping...
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $(".clickable").click(function() {
    $("#showing").fadeToggle();
    $("#hidden").fadeToggle();
  });
*/




});
