declare const require: any;
const fs = require('fs');

const libros: string [] = [];
const data = fs.readFileSync('./books.json', 'utf8');
const library = JSON.parse(data);
for(let i: number = 0; i < library.lenght; i++) {
    libros.push(library[i])
    }
export class Libro{
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
    export class Manage{
        all(library){
            return library
            }
    
        // insertar(libro: Libro, array: Libro[]){
        //     if(array.push(libro)){
        //         console.log('Se ha añadido ', libro.nombre, ' a la base de datos', array);
        //     } else{
        //         console.log('El libro', libro.nombre, ' No se ha podido añadir a la biblioteca');
        //     }
        //}        
        addBook(library: any, newBook: any) {
            if(library.push(newBook)) {
                console.log(`The book "${newBook.name}" has been added to the library`);
            } else {
                console.log(`The book "${newBook.name}" hasn't been added to the library`);
            }
        }

        // consultar(nombre: string, array: Libro[]){
        //     let libroEncontrado = array.find(libro => libro.nombre === nombre )
        //     if(libroEncontrado){
        //         console.log(nombre, ' Existe en bibioteca', libroEncontrado)
        //         return libroEncontrado
        //     } else{
        //         console.log(nombre, ' No existe en biblioteca');                
        //     }
        // }

        consultLibrary(name: string, library) {
            const bookFound = library.find(library => library.name === name)
            if (bookFound) {
                console.log(`The book "${name}" Its in the Library`);
                return library;                 
            } else {
                console.log(`"${name}" doesn't exist in the library`);
            }
        }
    
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

        modifyBooks(name: string, library, data: string) {
            let modifiedBook = this.consultLibrary(name, library);
            if (modifiedBook) {
                modifiedBook.name = data;
                console.log(`The book "${name}" has been modified. Now, its called ${data}`);
            } else {
                console.log(`The book has not been modified`);                            
            }
        }
    
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

        deleteBooks(name: string, library) {
            const deletedBook = this.consultLibrary(name, library)
            if (deletedBook) {
                delete library [deletedBook];
                return `The book ${name} was succesfully deleted`;
                } else {
                    return `The book ${name} couldn't be deleted`;
                }
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
    manager.modifyBooks('The Raven', library, 'Edgar Alan Poe - Short Stories Collection.');

    //Execute 'deleteBooks' function:
    manager.deleteBooks('The Raven', library);
    manager.deleteBooks('Atomic Habits', library);

    console.log(manager.all(library)); 