//Simple unit conversion code//
//functions to be used by a cooking app that convert between units. For example, a function that converts gallons to liters. Create a project for this like you did for the calculator, so that you can return and build a front-end for this later//

$(document).ready(function() {

  $("form").submit(function(event){
    var rad = $(":radio[name=when]:checked").val();
    $(".radioPrint").text(rad);
    // event.preventDefault();
    var num1 = $("#volume").val();
    $(".liters").text(Gallon2Liter(num1));

    var num2 = $("#length").val();
    $(".meters").text(Foot2Meter(num2));

    var dob = $("#birthdate").val();
    $(".birthdate").text(dob);

    var dob2 = $(":selected").val();
    $(".sele").text(dob2);

    var favoriteColor = $("#color").val();
    $(".acolor").text(favoriteColor);
    document.body.style.background = favoriteColor;
    event.preventDefault();
  });

});


var Gallon2Liter = function(num1) {
	return (num1 * 3.78541);
};

var Foot2Meter = function(num2) {
	return (num2 * 0.3048);
};
