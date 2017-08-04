$(document).ready(function() {

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();




	//This  will make it work in Chrome and FF
	var fur = {
	    "fur_color": [
	      {
	        "label": "Blue",
	        "value": "blu"
	      },
	      {
	        "label": "Pink",
	        "value": "pin"
	      },
	      {
	        "label": "Purple",
	        "value": "pur"
	      },
	      {
	        "label": "Orange",
	        "value": "ora"
	      },
	      {
	        "label": "Lime",
	        "value": "lim"
	      },
	      {
	        "label": "Black",
	        "value": "bla"
	      },
	      {
	        "label": "White",
	        "value": "whi"
	      }
	    ]
	  };
	 $.each(fur.fur_color, function (index){
	    console.log(fur.fur_color[index].label);
	  $('#color').append('<option value="' + fur.fur_color[index].value +'">'+ fur.fur_color[index].label +'</option>');
	 });
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

//This wont work in Chrome for security reasons, but it does on FireFox
/*$.getJSON('js/document.json', function(data) {
	console.log(data);
	var fur = data.fur_color;
	$.each(fur, function (index){
		$('#color').append('<option value="' + fur[index].value +'">'+ fur[index].label +'</option>');
	});
}); // close getJSON()*/


function validate(){
		var name = document.getElementById('name').value;
		var gender= document.getElementById('gender').value;
		var color= document.getElementById('color').value;
		var email = document.getElementById('email').value;
		var checkbox = document.getElementById('checkbox');

		var error= [];
		console.log(name);
		if(name == '') {
			$('#name-error').css("display","block");
			/*$('#name-error').css("border-bottom", "1px solid red");*/
			error ++;
		}else{
			$('#name-error').css("display","none");
		}//name
		if(gender== ''){
			$('#gender-error').css("display","block");
			error ++;
		}else{
			$('#gender-error').css("display","none");
		}//gender
		if(color == ''){
			$('#color-error').css("display","block");
			error ++;
		}else{
			$('#color-error').css("display","none");
		}//color

		if (!jQuery("#checkbox").is(":checked")) {
			$('#checkbox-error').css("display","block");
			error ++;
   		}else{
   			$('#checkbox-error').css("display","none");
   		}//check

   		if(email == ''){
   			$('#email-error').css("display","block");
			error ++;
   		}else{
   			$('#email-error').css("display","none");
   		}//email

		console.log(error);
		if(error >= 1){
			$('html, body').animate({
			  scrollTop: $('#name').offset().top}, 500);
		}else{
			//something
			$(".form").empty();
			$(".form").html('<div class="row"><h1>We are processing your request </h1>' + 
								'<div class="progress"><div class="indeterminate"></div>'+
								'</div> </div>');
		}
};//end function
