var Book = /** @class */ (function () {
    function Book(title, author, gender, pages) {
        this.title = title;
        this.author = author;
        this.gender = gender;
        this.pages = pages;
    }
    return Book;
}());
var clear = new Book('Atomic Habits', 'James Clear', 'Self-help', 294);
var lovecraft = new Book('The call of cthulhu', 'H. P. Lovecraft', 'Horror', 31);
var library = new Array();
library.push(clear, lovecraft);
console.log(library);
//Anadir libros nuevos.
//Consultar Libros.
//Modificar Libros.
//Eliminar Libros.
