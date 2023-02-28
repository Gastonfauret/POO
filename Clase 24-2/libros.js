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
        console.log("".concat(books));
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
        console.log("The book ".concat(newBook.nombre, " has been added to the library"));
    };
    // consultar(nombre: string, array: Libro[]){
    //     let libroEncontrado = array.find(libro => libro.nombre === nombre )
    //     if(libroEncontrado){
    //         console.log(nombre, ' Existe en bibioteca', libroEncontrado)
    //         return libroEncontrado
    //     } else{
    //         console.log(nombre, ' No existe en biblioteca');                
    //     }
    // }
    GestorLibros.prototype.consultLibrary = function (nombre, books) {
        var bookFound = books.find(function (books) { return books.nombre === nombre; });
        if (bookFound) {
            console.log("".concat(nombre, " Its in the Library, ").concat(bookFound));
        }
        else {
            console.log("".concat(nombre, " doesn't exist in the library"));
        }
    };
    // modificar(nombre: string, array: Libro[], dato: string){
    //     let libroModificar = this.consultar(nombre, array)
    //     if(libroModificar){
    //         libroModificar.nombre = dato;
    //         console.log('El libro', nombre, ' Ha sido modificado y ahora se llama ', dato);
    //     }
    //     else {
    //         console.log('El libro no se ha podido modificar');                
    //     }            
    // }
    GestorLibros.prototype.modifyBooks = function (nombre, books, data) {
        var modifiedBook = this.consultLibrary(nombre, books);
        if (modifiedBook) {
            modifiedBook.nombre = data;
            console.log("The book ".concat(nombre, " has been modified. Now, its called ").concat(data));
        }
        else {
            console.log("The book has not been modified");
        }
    };
    // eliminar(nombre: string, array: Libro[]): any {
    //     let libroEncontrado = array.findIndex(libro => libro.nombre == nombre);
    //     if(libroEncontrado >= 0){  
    //         array.splice(libroEncontrado, 1)
    //         console.log('Libro eliminado', nombre);
    //         console.log(array);
    //         return array;
    //     } else {    
    //     console.log('Libro ', nombre, 'no ha sido eliminado');
    //     }
    // }
    GestorLibros.prototype.deleteBooks = function (nombre, books) {
        var deletedBook = this.consultLibrary(nombre, books);
        if (deletedBook) {
            delete books[deletedBook];
            return "The book ".concat(nombre, " was succesfully deleted");
        }
        else {
            return "The book ".concat(nombre, " couldn't be deleted");
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
//Crear Libros:
var girlsTrain = new Libro("Girl's Train", "Novel", 235, "Paula Hawkins");
var readyPlayerOne = new Libro('Ready Player One', 'Sci-fi', 235, 'Ernest Cline');
var gestor = new GestorLibros;
//Ejecutar la funcion todo:
console.log(gestor.todo(books));
;
//Ejecutar la funcion addBooks:
gestor.addBook(books, girlsTrain);
gestor.addBook(books, readyPlayerOne);
//Ejecutar la funcion consultLibrary:
gestor.consultLibrary("Girl's Train", books);
gestor.consultLibrary('Atomic Habits', books);
//Ejecutar la funcion modifyBook:
gestor.modifyBooks('Ready Player One', books, 'RPO - Part. 1');
//Ejecutar la funcion deleteBooks:
gestor.deleteBooks("The Raven", books);
gestor.todo(books);
