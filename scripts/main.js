$(document).ready(function(){
$(".error").hide();
var input = $(".input-group");
$(input).filter( ":even" ).addClass("even");

$("#firstName").on('blur', function(){   
    var firstName = $("#firstName").val();     
    var reqMessage = $("#firstName").closest(".input-group").find(".requiredMsg"); 
    firstName === '' ? reqMessage.html("First Name Required").fadeIn() : reqMessage.html("").fadeOut();
 });

 $("#lastName").on('blur', function(){   
    var lastName = $("#lastName").val();     
    var reqMessage = $("#lastName").closest(".input-group").find(".requiredMsg"); 
    lastName === '' ? reqMessage.html("Last Name Required").fadeIn() : reqMessage.html("").fadeOut();
 });

 $("#emailAddress").on('blur', function(){   
     //Check to see if EmailAddress contains the "@" symbol and the ".com" string.
    var emailAddress = $("#emailAddress").val();     
    var reqMessage = $("#emailAddress").closest(".input-group").find(".requiredMsg"); 
    var emailMessage = $("#emailAddress").closest(".input-group").find(".emailMsg"); 
    emailAddress === '' ? reqMessage.html("Email Address Required").fadeIn() : reqMessage.html("").fadeOut();
    emailAddress.indexOf("@") < 1 ? emailMessage.html("Valid Email Address Required").fadeIn() : emailMessage.html("").fadeOut(); 
    emailAddress.indexOf("com") < 1 ? emailMessage.html("Valid Email Address Required").fadeIn() : emailMessage.html("").fadeOut(); 
 });

});