let resultsArray = [];

function pingPongFunc (num){
 for (var i=1; i<=num; i++){
   if(i%3 ==0 && i%5==0 ){
     resultsArray.push("ping pong");
   }
   else if(i%3 == 0){
     resultsArray.push("ping");

   }
   else if(i%5 == 0){
     resultsArray.push("pong");

   }
   else{
     resultsArray.push(i);
   };
 };
};

$(document).ready(function(){
var mynumtestreg = /^[0-9]+/g;


$("form#Enter").submit(function(event){
 event.preventDefault();
 var userInput = parseInt($("#I").val());
 pingPongFunc(userInput);
 $(".list-group").empty();
 resultsArray.forEach(function(x){
   $(".list-group").append($("<a class='list-group-item'>").html(x));
 });
 });
});
