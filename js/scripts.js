//Simple unit conversion code//
//functions to be used by a cooking app that convert between units. For example, a function that converts gallons to liters. Create a project for this like you did for the calculator, so that you can return and build a front-end for this later//

$(document).ready(function() {

  $("form").submit(function(event){
    var rad = $(":radio[name=when]:checked").val();
    $(".radioPrint").text(rad);
    event.preventDefault();
  });

  $("form").submit(function(event){
		var num1 = $("#volume").val();
		$(".liters").text(Gallon2Liter(num1));
		event.preventDefault();
	});
	$("form").submit(function(event){
		var num2 = $("#length").val();
		$(".meters").text(Foot2Meter(num2));
		event.preventDefault();
	});

  $("form").submit(function(event){
    var dob = $("#birthdate").val();
    $(".birthdate").text(dob);
    event.preventDefault();
  });

  $("form").submit(function(event){
    var dob = $(":selected").val();
    $(".sele").text(dob);
    event.preventDefault();
  });

  $("form").submit(function(event){
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


// (Gallon2Liter(num1));
// (Foot2Meter(num2));
