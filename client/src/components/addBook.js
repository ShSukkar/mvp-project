angular.module('books-library')
.component('addBook',
{
	controller: function($http)
	{
		this.sendUserEntries = function()
		{
			//console.log("inside send");
			var bookInfo = {
				  title: $("#title").val(),
				  author: $("#author").val(),
				  description: $("#description").val(),
				  genre: $("#genre").val(),
				  pic: $("#pic").val(),
				  readStatus: $("#readStatus").val()
			};
			//console.log(JSON.stringify(bookInfo));
			
			var sendingData = $http({
                    method: 'POST',
                    url: '/books',
                    data: bookInfo,
                    processData: false
                })
                .then(function (response) 
                {
                    /*executed when server responds back*/
                    console.log(response);
                    //$scope.response.data = response;
                });
		}
	},
	template: `<h3>Add Book</h3> \
				<pre>Title: 		<input type="text" id="title"><br><br>\
Author: 	<input type="text" id="author"><br><br>\
Description: 	<input type="text" id="description"><br><br>\
Genre: 		<input type="text" id="genre"><br><br>\
Release Year: 	<input type="text" id="pic"><br><br>\
Reading Status: <input type="text" id="readStatus"></pre>\
<button ng-click='$ctrl.sendUserEntries()'>Add</button>`
});