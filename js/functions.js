$(document).ready(function() {
	//Initialize select elements
    $('select').material_select();
    //Activate dropdown
    $(".dropdown-button").dropdown();

 //Range function 
   $('input[type="range"]').on("input change", function () {
	    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
	    //console.log(val);
	    var width = $(this).css('width');
	    var num = parseInt(width);
	    //console.log("num " + num);
	    //it duplicates the input type range width property
	    var val2 = val*num;
	    //console.log(val2);
	    $('.hack').css('width', val2); 
	});//end type=range

  }); //End Document Ready

//This wont work in Chrome for security reasons
$.getJSON('js/document.json', function(data) {
	console.log(data);
	var fur = data.fur_color;
	$.each(fur, function (index){
		$('#color').append('<option value="' + fur[index].value +'">'+ fur[index].label +'</option>');
	});
}); // close getJSON()

function validate(){
		var name = document.getElementById('name').value;
		console.log(name);
		if(name == '') {
			$('#name-error').css("display","block");
		}

};//end function

