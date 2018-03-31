function pingpong(startpoint) {
 if ((startpoint % 3 === 0 && startpoint % 5 === 0)) {
   return ('pingpong');
 } else if (startpoint % 5 === 0) {
   return ('pong');
 } else if (startpoint % 3 === 0) {
   return ('ping');
 } else {
   return startpoint;
 }

}

$(document).ready(function(){
 $("#btn").click(function(event){
   event.preventDefault();
   var number = parseInt($("input#I").val());
   for (var startpoint = 1; startpoint <= number; startpoint ++){
     $("ul.list").append("<li>" + pingpong(startpoint) + "<li>");
   }
 });
});
