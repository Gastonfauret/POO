const fs = require('fs');

const libros: string [] = [];
const data = fs.readFileSync('./books.json', 'utf8');
const books = JSON.parse(data);
for(let i: number = 0; i < books.lenght; i++) {
    libros.push(books[i])
}
console.log(books);


