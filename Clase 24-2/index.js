var fs = require('fs');
var libros = [];
var data = fs.readFileSync('./books.json', 'utf8');
var books = JSON.parse(data);
for (var i = 0; i < books.lenght; i++) {
    libros.push(books[i]);
}
console.log(books);
