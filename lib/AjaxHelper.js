
// Document API
// http://api.jquery.com/jquery.ajax/


// $ajax & $post
// Ref : https://stackoverflow.com/questions/7528757/post-vs-ajax?noredirect=1&lq=1
// It doesn't work because in your $.post method you cannot set the content type of the request to application/json.
// So it is not possible to invoke an ASP.NET PageMethod using $.post because an ASP.NET PageMethod requires a JSON request.
// You will have to use $.ajax.


function AjaxPost(myUrl, myData){
	// Note
	// timeout : (in milliseconds) for the request. A value of 0 means there will be no timeout.  

	// async = false 
	// Ref https://stackoverflow.com/questions/7588994/jquery-loading-an-image-while-async-false
	// async: false will lock the browser,
	// resulting in all animations being paused until processing is allowed to continue. 
	// You can however get the graphic to at least show up before the ajax calls by placing the ajax calls inside of a setTimeout with a delay of 1ms or greater. 
	// It still will not animate though, even though it is an animated gif.

	var result = { success:null, error:null };

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

function AjaxGetHtml(myUrl){
	return html = $.get(myUrl, function (data) { html = data; });
}
