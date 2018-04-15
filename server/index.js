const express = require('express');
let bodyParser = require("body-parser");
let db = require("../database/index.js");
let path = require("path");

let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));


app.get("/books", function(req, res)
{
	var myBooks;
	db.Book.find(function(err, data)
	{
		if(err)
		{
			console.log(err);
		}
		myBooks = data;
		var draw = "";
		myBooks.map(function(book)
			{
				draw += "<h3>Book Title: " + book.title+"</h3>" +
				"<p><b>Book Author:</b> " + book.author + "<p>" +
						"<p><b>Book Description:</b> " + book.description + "<p>" +
						"<p><b>Book Genre:</b> " + book.author + "<p>" +
						"<p><b>Release Year:</b> " + book.pic + "<p>" +
						"<p><b>Book Reading Status:</b> " + book.readStatus + "<p>";
			});
		res.status(200).send(draw);
	});	
});

app.post("/books", function(req, res)
{
	//console.log(typeof req.body.description);
	// var bookInfo = {
	// 	  title: req.body.txtTitle,
	// 	  author: req.body.txtAuthor,
	// 	  description: req.body.txtDesc,
	// 	  genre: req.body.txtGenre,
	// 	  pic: req.body.txtPic,
	// 	  readStatus: req.body.txtStatus
	// 		};
	// 		console.log(req.body);
	db.addBook(req.body, function(err, data)
	{
		if(err)
		{
			//console.log(err);
			res.send(err);
		}
		res.status(201).send(data);
	});
});

let port = 3000;

app.listen(port, function() {
  console.log("listening on port " + port);
});