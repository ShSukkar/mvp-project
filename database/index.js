const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp-project');

let bookSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genre: String,
  pic: String,
  readStatus: String
});

let Book = mongoose.model('Book', bookSchema);

let addBook = function(data, callback)
{
	var book = new Book(data);

	book.save(function(err, data2)
	{
		if(err)
		{
			callback(err, null);
		}
		callback(null, data2);
	});
}

module.exports.addBook = addBook;
module.exports.Book = Book;