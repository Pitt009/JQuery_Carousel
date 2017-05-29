$(document).ready();


$(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().append('#slider');}, 4000);
});

$("#btn1").click(function () {
  $("#btn1").css("background-color", "pink");
  $("#imagen1").show();

});

$("#btn2").click(function () {
  $("#btn2").css("background-color", "pink");
  $("#imagen2").show();

});

$("#btn3").click(function () {
  $("#btn3").css("background-color", "pink");
  $("#imagen3").show();

});

$("#btn4").click(function () {
  $("#btn4").css("background-color", "pink");
  $("#imagen4").show();

});

$("#btn5").click(function () {
  $("#btn5").css("background-color", "pink");
  $("#imagen5").show();

});
