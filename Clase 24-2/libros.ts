//declare const require: any;
const fs = require('fs');

const libros: string [] = [];
class Libro{
    name: string;
    gender: string;
    pages: number;
    author: string;
            
    constructor(name: string, gender: string, pages: number, author: string){
        this.name = name;
        this.gender = gender;
        this.pages = pages;
        this.author = author;
        }
    }    
    
    /* Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros */
    class Manage{
        all(libros){
            console.log(libros);            
            }
    
        addBook(libros: any, newBook: any) {
            if(libros.push(newBook)) {
                this.convertArrayToJson(libros)
                console.log(`The book "${newBook.name}" has been added to the library`);
            } else {
                console.log(`The book "${newBook.name}" hasn't been added to the library`);
            }
        }

        consultLibrary(name: string, libros) {
            const bookFound = libros.find(libros => libros.name === name)
            if (bookFound) {
                console.log(`The book "${name}" Its in the Library`);
                return bookFound;                 
            } else {
                console.log(`"${name}" doesn't exist in the library`);
            }
        }
    
        modifyBooks(name: string, libros, data: string) {
            let modifiedBook = this.consultLibrary(name, libros);
            if (modifiedBook) {
                modifiedBook.name = data;
                console.log(`The book "${name}" has been modified. Now, its called "${data}"`);
            } else {
                console.log(`The book has not been modified`);                            
            }
        }
    
        deleteBooks(name: string, libros) {
            const deletedBook = libros.findIndex(libro => libro.name == name);
            if(deletedBook >= 0){  
                libros.splice(deletedBook, 1)
                console.log(`The book "${name}" was sucesfully deleted`);
                console.log(libros);
                return libros;
                } else {
                    return `The book ${name} couldn't be deleted`;
                }
            }

        convertArrayToJson(libros) {
            var fs = require('fs');
            var file = 'books.json';
            var data = JSON.stringify(libros);
            
            fs.writeFile(file, data, function(error) {
                if(error) {
                    return console.log(error);
                }            
                });                
            }
        }


    //Create Books:
    const girlsTrain = new Libro("Girl's Train", "Novel", 235, "Paula Hawkins");
    const readyPlayerOne = new Libro('Ready Player One', 'Sci-fi', 235, 'Ernest Cline');
    const theCall = new Libro('The Raven', 'Thriller', 13, 'Edgar Alan Poe');
    const atomicHabits = new Libro('Atomic Habits', 'Self-Help', 350, 'James Clear');
    const emotional = new Libro('Emotional Intelligence', 'Education', 527, 'Daniel Goleman');
    const manager = new Manage;

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