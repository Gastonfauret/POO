declare const require: any;
const fs = require('fs');

const libros: string [] = [];
const data = fs.readFileSync('./books2.json', 'utf8');
const books = JSON.parse(data);
for(let i: number = 0; i < books.lenght; i++) {
    libros.push(books[i])
}
//console.log(books);

const readyPlayerOne = ({"title": "Ready Player One",
"author": "Ernest Cline",
"gender": "Sci-fi",
"pages": 374});

const girlsTrain = ({"title": "Girl's Train",
"author": "Paula Hawkins",
"gender": "Novel",
"pages": 235});


function addBook(books, newBook) {
    books.push(newBook);
    return books
}

addBook(books, readyPlayerOne);
addBook(books, girlsTrain);
console.log(typeof books);