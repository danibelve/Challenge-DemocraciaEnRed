$(document).ready(function() {

	//Initialize select elements
    $('select').material_select();
    //Activate dropdown
    $(".dropdown-button").dropdown();
   $('input[type="range"]').on("input change", function () {
	    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
	    console.log(val);
	    //it duplicates the input type range width property
	    var val2 = val*453;
	    console.log(val2);

	    $('.hack').css('width', val2); 
	});//end type=range

  }); //End Document Ready