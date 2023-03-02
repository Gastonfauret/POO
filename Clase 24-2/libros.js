"use strict";
exports.__esModule = true;
exports.Manage = exports.Libro = void 0;
var fs = require('fs');
var libros = [];
var Libro = /** @class */ (function () {
    function Libro(name, gender, pages, author) {
        this.name = name;
        this.gender = gender;
        this.pages = pages;
        this.author = author;
    }
    return Libro;
}());
exports.Libro = Libro;
/* Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros */
var Manage = /** @class */ (function () {
    function Manage() {
    }
    Manage.prototype.all = function (libros) {
        console.log(libros);
    };
    Manage.prototype.addBook = function (libros, newBook) {
        if (libros.push(newBook)) {
            this.convertArrayToJson(libros);
            console.log("The book \"".concat(newBook.name, "\" has been added to the library"));
        }
        else {
            console.log("The book \"".concat(newBook.name, "\" hasn't been added to the library"));
        }
    };
    Manage.prototype.consultLibrary = function (name, libros) {
        var bookFound = libros.find(function (libros) { return libros.name === name; });
        if (bookFound) {
            console.log("The book \"".concat(name, "\" Its in the Library"));
            return bookFound;
        }
        else {
            console.log("\"".concat(name, "\" doesn't exist in the library"));
        }
    };
    Manage.prototype.modifyBooks = function (name, libros, data) {
        var modifiedBook = this.consultLibrary(name, libros);
        if (modifiedBook) {
            modifiedBook.name = data;
            console.log("The book \"".concat(name, "\" has been modified. Now, its called ").concat(data));
        }
        else {
            console.log("The book has not been modified");
        }
    };
    Manage.prototype.deleteBooks = function (name, libros) {
        var deletedBook = libros.findIndex(function (libro) { return libro.name == name; });
        if (deletedBook >= 0) {
            libros.splice(deletedBook, 1);
            console.log("The book \"".concat(name, "\" was sucesfully deleted"));
            console.log(libros);
            return libros;
        }
        else {
            return "The book ".concat(name, " couldn't be deleted");
        }
    };
    Manage.prototype.convertArrayToJson = function (libros) {
        var fs = require('fs');
        var file = 'books.json';
        var data = JSON.stringify(libros);
        fs.writeFile(file, data, function (error) {
            if (error) {
                return console.log(error);
            }
        });
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
//Execute 'all' function:
console.log(manager.all(libros));
//Execute 'addBooks' function:
manager.addBook(libros, girlsTrain);
manager.addBook(libros, readyPlayerOne);
manager.addBook(libros, theCall);
manager.addBook(libros, atomicHabits);
manager.addBook(libros, emotional);
//Execute 'consultLibrary' function:
console.log(manager.consultLibrary("Girl's Train", libros));
console.log(manager.consultLibrary('Atomic Habits', libros));
//Execute 'modifyBook' function:
manager.modifyBooks('Ready Player One', libros, 'RPO - Part. 1');
manager.modifyBooks('The Raven', libros, 'Edgar Alan Poe - Short Stories Collection.');
//Execute 'deleteBooks' function:
manager.deleteBooks('Edgar Alan Poe - Short Stories Collection.', libros);
manager.deleteBooks('Atomic Habits', libros);
manager.all(libros);
