class Book {
    private title: string;
    private author: string;
    private gender: string;
    private pages: number;

    constructor(title: string, author: string, gender: string, pages: number) {
        this.title = title
        this.author = author
        this.gender = gender
        this.pages = pages 
    }

    // addNewBook (book: Book, array: Book[]) {
    //     if(array.push(book)) {
    //         console.log(`Se ha anadido ${book.title} a la base de datos ${array}`);
            
    //     }
    // }
}

const clear = new Book('Atomic Habits', 'James Clear', 'Self-help', 294)
const lovecraft = new Book('The call of cthulhu', 'H. P. Lovecraft', 'Horror', 31)
let library: any = new Array();
library.push(clear, lovecraft)
console.log(library);


//Anadir libros nuevos.
//Consultar Libros.
//Modificar Libros.
//Eliminar Libros.