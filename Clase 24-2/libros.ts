const fs = import('fs');

const libros: string [] = [];
const data = fs.readFileSync('./books.json', 'utf8');
const books = JSON.parse(data);
for(let i: number = 0; i < books.lenght; i++) {
    libros.push(books[i])
}
export class Libro{
    nombre: string;
    genero: string;
    cantPaginas: number;
    autor: string;
            
    constructor(nombre: string, genero: string, cantPaginas: number, autor?: any){
        this.nombre = nombre;
        this.genero = genero;
        this.cantPaginas = cantPaginas;
        this.autor = autor;
        }
    }    
    
    /* Implementar la clase GestorLibros → debe soportar insertar/consultar/modificar/eliminar libros */
    export class GestorLibros{
        todo(books){
            console.log('Libros: ', books);
        }
    
        // insertar(libro: Libro, array: Libro[]){
        //     if(array.push(libro)){
        //         console.log('Se ha añadido ', libro.nombre, ' a la base de datos', array);
        //     } else{
        //         console.log('El libro', libro.nombre, ' No se ha podido añadir a la biblioteca');
        //     }
        // }
        
        addBook(books, newBook) {
            books.push(newBook);
            console.log('Se ha añadido ', newBook.nombre, ' a la base de datos.');
            return books
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

        consultLibrary(nombre: string, books) {
            const bookFound = books.find(books => books.nombre === nombre)
            if (bookFound) {
                console.log(nombre, ' Its in the Library ', bookFound)
                return bookFound
            } else {
                console.log(nombre, ' does not exist in the library')
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

        modifyBooks(nombre: string, books, data: string) {
            const modifiedBook = this.consultLibrary(nombre, books)
            if(modifiedBook) {
                modifiedBook.nombre = data;
                console.log('The Book ', nombre, 'has been modified. Now, its called ', data);
            } else {
                console.log('The book has not been modified');                
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

        deleteBooks(nombre: string, books) {
            const bookFound = books.findIndex(books => books.nombre == nombre);
            if (bookFound >= 0) {
                books.splice(bookFound, 1);
                console.log('Book Eliminated: ', nombre);
                console.log(books);
                return books
            } else {
                console.log('The books ', nombre, 'has not been eliminated.');
                
            }
        }
    }

    //Crear Libros:
    const girlsTrain = new Libro("Girl's Train", "Novel", 235, "Paula Hawkins");
    const readyPlayerOne = new Libro('Ready Player One', 'Sci-fi', 235, 'Ernest Cline');
    const gestor = new GestorLibros;

    //Ejecutar la funcion todo:
    gestor.todo(books);

    //Ejecutar la funcion addBooks:
    gestor.addBook(books, girlsTrain);
    gestor.addBook(books, readyPlayerOne);
    gestor.todo(books);

    //Ejecutar la funcion consultLibrary:
    gestor.consultLibrary("Girl's Train", books);

    //Ejecutar la funcion modifyBook:
    gestor.modifyBooks('Ready Player One', books, 'RPO - Part. 1');

    //Ejecutar la funcion deleteBooks:
    gestor.deleteBooks("The Call of Cthutulu", books);
    /*
    Crear una biblioteca de libros
    crear gestor de libros
    ejecutar la funcion insertar
    ejecutar la funcion consultar
    ejecutar la funcion modificar
    ejecutar la funcion eliminar */  
