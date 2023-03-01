"use strict";
exports.__esModule = true;
exports.Manage = exports.Libro = void 0;
var fs = require('fs');
var libros = [];
var data = fs.readFileSync('./books.json', 'utf8');
var library = JSON.parse(data);
for (var i = 0; i < library.lenght; i++) {
    libros.push(library[i]);
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
var Manage = /** @class */ (function () {
    function Manage() {
    }
    Manage.prototype.all = function (library) {
        return library;
    };
    // insertar(libro: Libro, array: Libro[]){
    //     if(array.push(libro)){
    //         console.log('Se ha añadido ', libro.nombre, ' a la base de datos', array);
    //     } else{
    //         console.log('El libro', libro.nombre, ' No se ha podido añadir a la biblioteca');
    //     }
    // }
    Manage.prototype.addBook = function (library, newBook) {
        if (library.push(newBook)) {
            library.push(newBook);
            console.log("The book \"".concat(newBook.nombre, "\" has been added to the library"));
        }
        else {
            console.log("The book \"".concat(newBook.nombre, "\" hasn't been added to the library"));
        }
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
    Manage.prototype.consultLibrary = function (nombre, library) {
        var bookFound = library.find(function (library) { return library.nombre === nombre; });
        if (bookFound) {
            console.log("The book \"".concat(nombre, "\" Its in the Library"));
            return library;
        }
        else {
            console.log("\"".concat(nombre, "\" doesn't exist in the library"));
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
    Manage.prototype.modifyBooks = function (nombre, library, data) {
        var modifiedBook = this.consultLibrary(nombre, library);
        if (modifiedBook) {
            modifiedBook.nombre = data;
            console.log("The book \"".concat(nombre, "\" has been modified. Now, its called ").concat(data));
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
    Manage.prototype.deleteBooks = function (name, library) {
        var deletedBook = this.consultLibrary(name, library);
        if (deletedBook) {
            delete library[deletedBook];
            return "The book ".concat(name, " was succesfully deleted");
        }
        else {
            return "The book ".concat(name, " couldn't be deleted");
        }
    };
    return Manage;
}());
exports.Manage = Manage;
//Create Books:
var girlsTrain = new Libro("Girl's Train", "Novel", 235, "Paula Hawkins");
var readyPlayerOne = new Libro('Ready Player One', 'Sci-fi', 235, 'Ernest Cline');
var theCall = new Libro('The Raven', 'Thriller', 13, 'Edgar Alan Poe');
var atomicHabits = new Libro('Atomic Habits', 'Self-Help', 350, 'James Clear');
var emotional = new Libro('Emotional Intelligence', 'Education', 527, 'Daniel Goleman');
var manager = new Manage;
//Ejecutar la funcion todo:
console.log(manager.all(library));
//Execute 'addBooks' function:
manager.addBook(library, girlsTrain);
manager.addBook(library, readyPlayerOne);
manager.addBook(library, theCall);
manager.addBook(library, atomicHabits);
manager.addBook(library, emotional);
//Execute 'consultLibrary' function:
console.log(manager.consultLibrary("Girl's Train", library));
console.log(manager.consultLibrary('Atomic Habits', library));
//Execute 'modifyBook' function:
manager.modifyBooks('Ready Player One', library, 'RPO - Part. 1');
//Execute 'deleteBooks' function:
manager.deleteBooks("The Raven", library);
console.log(manager.all(library));
