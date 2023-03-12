$(document).ready(function(){


$("#select").on("change",function(){

var selectValor = "#"+$(this).val();

$("#padreforms").children("div").hide();
$("#padreforms").children(selectValor).show();

});



});
