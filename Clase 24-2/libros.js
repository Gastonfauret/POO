"use strict";
exports.__esModule = true;
exports.GestorLibros = exports.Libro = void 0;
var fs = require('fs');
var libros = [];
var data = fs.readFileSync('./books.json', 'utf8');
var books = JSON.parse(data);
for (var i = 0; i < books.lenght; i++) {
    libros.push(books[i]);
}
var Libro = /** @class */ (function () {
    function Libro(nombre, genero, cantPaginas, autor) {
        this.nombre = nombre;
        this.genero = genero;
        this.cantPaginas = cantPaginas;
        this.autor = autor;
    }
    return Libro;
}());
exports.Libro = Libro;
/* Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros */
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
    }
    GestorLibros.prototype.todo = function (books) {
        console.log('Libros: ', books);
    };
    // insertar(libro: Libro, array: Libro[]){
    //     if(array.push(libro)){
    //         console.log('Se ha añadido ', libro.nombre, ' a la base de datos', array);
    //     } else{
    //         console.log('El libro', libro.nombre, ' No se ha podido añadir a la biblioteca');
    //     }
    // }
    GestorLibros.prototype.addBook = function (books, newBook) {
        books.push(newBook);
        console.log('Se ha añadido ', newBook.nombre, ' a la base de datos.');
        return books;
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
var girlsTrain = new Libro("Girl's Train", "Novel", 235, "Paula Hawkins");
var readyPlayerOne = new Libro('Ready Player One', 'Sci-fi', 235, 'Ernest Cline');
var gestor = new GestorLibros;
//gestor.addBook(girlsTrain, books)
gestor.todo(books);
gestor.addBook(books, girlsTrain);
gestor.addBook(books, readyPlayerOne);
gestor.todo(books);
/*
Crear libros
Crear una biblioteca de libros
crear gestor de libros
ejecutar la funcion todo
ejecutar la funcion insertar}
ejecutar la funcion consultar
ejecutar la funcion modificar
ejecutar la funcion eliminar */
/* Nuestros libros */
//var harryPotter = new Libro('Harry Potter', 'Fantasia', 200, 'J.k. Rowling');
//var martinFierro = new Libro('Martin Fierro', 'Tradicionalista', 200, 'Jose Hernandez');
//var señorAnillos = new Libro('Señor de los anillos', 'Fantasia', 500, 'J. RR Tolkien');
/* Poblar nuestra biblioteca con libros */
//var biblioteca = [harryPotter, martinFierro, señorAnillos];
/* Crear nuevo gestor de libros */
//var gestor = new GestorLibros;
//var carrie = new Libro('Carrie', 'Terror', 450, 'Stephen King');
// gestor.insertar(carrie, biblioteca)
// gestor.todo(biblioteca)
// gestor.consultar('Señor de los anillos', biblioteca)
// gestor.modificar('Harry Potter', biblioteca, 'Harry Potter y el prisionero de askaban')
// gestor.eliminar('Harry Potter', biblioteca);
