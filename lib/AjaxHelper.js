
// $ajax & $post
// Ref : https://stackoverflow.com/questions/7528757/post-vs-ajax?noredirect=1&lq=1
// It doesn't work because in your $.post method you cannot set the content type of the request to application/json.
// So it is not possible to invoke an ASP.NET PageMethod using $.post because an ASP.NET PageMethod requires a JSON request.
// You will have to use $.ajax.



function AjaxPost(myUrl, myData){

	var result = { success:null, error:null };
// Note
// timeout : (in milliseconds) for the request. A value of 0 means there will be no timeout.  
$.ajax({
	type: "POST",
	url: myUrl,
	data: myData,
	async : false,
	cache : false,
	timeout : 3600, 
	contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	dataType : 'json',
	success: function(data) {
			// A function to be called if the request succeeds. 
			result.success = data;
		},
		error: function(error) {
			//A function to be called if the request fails. 
			result.error = error;
		},
		// complete: function(complete) {
		// 	//A function to be called when the request finishes (after success and error callbacks are executed)
		// 	result.complete = complete;
		// }
	});


return result;
}