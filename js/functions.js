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

<<<<<<< HEAD
  }); //End Document Ready

//This wont work in Chrome for security reasons
$.getJSON('js/document.json', function(data) {
	console.log(data);
	var fur = data.fur_color;
	$.each(fur, function (index){
		$('#color').append('<option value="' + fur[index].value +'">'+ fur[index].label +'</option>');
	});
}); // close getJSON()
/*
$.ajax({
  url: 'http://myjson.com/17cfa1',
  dataType: 'jsonp',
  success: function (data) {
    var fur = data.fur_color;
	$.each(fur, function (index){
			$('#color').append('<option value="' + fur[index].value +'">'+ fur[index].label +'</option>');
		});
	}); // close getJSON()
   error: function(jqXHR, textStatus, errorThrown) {
     //Error handling code
     alert('Oops there was an error');
   }
  }
});*/
=======
}); //End Document Ready
$.getJSON('js/document.json', function(data) {
	var fur = data.fur_color;
	$.each(fur, function (index){
        $('#color').append('<option value="' + fur[index].value +'">'+ fur[index].label +'</option>');
	});
}); // close getJSON()
								    
function validate(){
		var name = document.getElementById('name').value;
		var gender = document.getElementById('gender').value;
		var furColor = document.getElementById('fur').value;
		var mail = document.getElementById('email').value;
		check = document.getElementById('checkbox').value; 
		console.log(name);
		if(name == '') {
			$('#name-error').removeClass("hide");
		}

};//end function

>>>>>>> aeb9c2c7b81c1cf046a5b5ff890edf5a4ed5f416
