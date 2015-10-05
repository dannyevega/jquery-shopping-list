//create variables for the 'minus' remove button and 'check' complete button
var removeButton = '<i id="remove" class="fa fa-minus-circle"></i>';
var checkMark = '<i id="checkmark" class="fa fa-check-circle"></i>';	

//allows users to add items using the 'ADD' button
$('.item-container .new-item').submit(instead(addItem));

removeItem();		
checkOff();
emptyList();

//allows you to sort the items in the list
$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();

function instead(fn){
	return function(e){
		e.preventDefault();
		fn.apply(this);
	};
}

function addItem(event){
	// event.preventDefault();
	if($('#item-input').val().trim().length === 0){
		$('.error-message').show();
		$('#item-input').val('');
	} else {
		$('.error-message').hide();
		var itemContent = $('#item-input').val();
		// var appendItem = '<li>' + removeButton + itemContent + checkMark + '</li>'
		var listItem = $('<li>').text(itemContent).prepend(removeButton).append(checkMark);		
		$('.list-area').append(listItem);
		$('#item-input').val('');				
	}
}

//allows user to remove an item from the list
function removeItem(){
	$(document).on("click", "#remove", function(){	
		$(this).closest('li').slideUp("slow");
	});	
}

//allows user to check an item off and uncheck it as well
function checkOff(){
	$(document).on("click", "#checkmark", function(){
		$(this).closest('li').toggleClass("check-off");
	});	
}

//allows user to empty all items from list
function emptyList(){
	$(document).on("click", "#clear-button", function(){
		$('.list-area').empty();
	});	
}

//how come the above will work but when I call it this way inside the first $(document).ready
//this wont work because when the page loads, there is no li items with id="remove"
//look up jquery event delegation
// $('#remove').click(function(){
// 	$(this).closest('li').slideUp("slow");
// })
