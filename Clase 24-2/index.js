"use strict";
exports.__esModule = true;
var fs = require('fs');
var libros = [];
var data = fs.readFileSync('./books.json', 'utf8');
var books = JSON.parse(data);
for (var i = 0; i < books.lenght; i++) {
    libros.push(books[i]);
}
//console.log(books);
var readyPlayerOne = ({ "title": "Ready Player One",
    "author": "Ernest Cline",
    "gender": "Sci-fi",
    "pages": 374 });
var girlsTrain = ({ "title": "Girl's Train",
    "author": "Paula Hawkins",
    "gender": "Novel",
    "pages": 235 });
function addBook(books, newBook) {
    books.push(newBook);
    return books;
}
addBook(books, readyPlayerOne);
addBook(books, girlsTrain);
console.log(typeof books);
