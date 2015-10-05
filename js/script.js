$(document).ready(function(){
	//create variables for the 'minus' remove button and 'check' complete button
	var removeButton = '<i id="remove" class="fa fa-minus-circle"></i>';
	var checkMark = '<i id="checkmark" class="fa fa-check-circle"></i>';	

	//allows users to add items using the 'enter' button
	$('#item-input').keyup(function(e){
		if(e.which == 13){
			e.preventDefault();
			$('#add-button').click();
		}
	});

	//allows users to add items using the 'ADD' button
	$('#add-button').click(function(){
		if($('#item-input').val().trim().length === 0){
			$('.error-message').show();
			$('#item-input').val('');
		} else {
			$('.error-message').hide();
			var itemContent = $('#item-input').val();
			var appendItem = '<li id="draggable">' + removeButton + itemContent + checkMark + '</li>'
			$('.list-area').append(appendItem);
			$('#item-input').val('');				
		}
	});

	removeItem();		
	checkOff();
	emptyList();

});

//allows you to sort the items in the list
$(function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
});

//allows user to remove an item from the list
function removeItem(){
	$(document).on("click", "#remove", function(){	
		$(this).closest('li').slideUp("slow");
	});	
}
//how come the above will work but when I call it this way inside the first $(document).ready
// $('#remove').click(function(){
// 	$(this).closest('li').slideUp("slow");
// })

//allows user to check an item off and uncheck it as well
function checkOff(){
	$(document).on("click", "#checkmark", function(){
		$(this).closest('li').toggleClass("check-off").css("color", "white");
	});	
}

//allows user to empty all items from list
function emptyList(){
	$(document).on("click", "#clear-button", function(){
		$('.list-area').empty();
	});	
}
