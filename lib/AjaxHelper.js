
// $ajax & $post
// Ref : https://stackoverflow.com/questions/7528757/post-vs-ajax?noredirect=1&lq=1
// It doesn't work because in your $.post method you cannot set the content type of the request to application/json.
// So it is not possible to invoke an ASP.NET PageMethod using $.post because an ASP.NET PageMethod requires a JSON request.
// You will have to use $.ajax.



function AjaxPost(url, data){

	var jqxhr = $.post(url, function() {
		alert( "success" );
	})

	.done(function() {
		alert( "second success" );
	})

	.fail(function() {
		alert( "error" );
	})

	.always(function() {
		alert( "finished" );
	});

}