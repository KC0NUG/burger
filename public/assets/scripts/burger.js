// A $( document ).ready() block.
//
// Execute the javascript after the web browser has parsed
// the entire HTML document and built the Document Object 
// Model in memory
//
$( document ).ready(function() {

	console.log("Hey Chuck!");
	
	$(".devour-buttons").on("click", function() {
		console.log("A Devour Button was Pressed!");
		var buttonId = $(this).attr("value");
		console.log(`Button Id: ${buttonId}`);	
		$("#" + buttonId).appendTo("#devoured-burgers");	
		$("#" + buttonId + " > button").hide();	
		$.ajax({
			method: "PUT",
			url: "/" + buttonId,			
			data: { devoured: true }
		})
		.done(function( msg ) {
			console.log( msg );
			location.reload();
		});
	});	


	$("#submitBtn").on("click", function() {
		console.log("Submit Button was Pressed!");

		var burgerName = $("#burgerInput").val().trim();
		$.ajax({
			method: "POST",
			url: "/",
			data: { burger_name: burgerName }
		})
		.done(function( msg ) {
			$("#burgerInput").val("");
			console.log( msg );
			location.reload();
		});
	});

});
	