$(document).ready(function(){
    $("#menu").click(function(){
        $("nav").toggle("slow");
    });
    $("#services").click(function(){
        $(".dropdown").toggle();
    });
});