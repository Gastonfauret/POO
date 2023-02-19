//Constructor

//Se usa para crear objetos nuevos y anadir nuevas propiedades a un objeto.
//Es un generador de objetos.
//Son funciones que nos permiten crear objetos con propiedades y metodos.

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    mostrarNombreCompleto() {
        console.log(this) 
        return `${this.nombre} ${this.apellido}`
    }
}

//Creacion de un Constructor:
//Vease que el nombre del constructor se pone con su primera letra en mayuscula.

function Persona() { //Este constructor creara un nuevo user, que tendra:
    this.nombre = "", //Un nombre, arranca vacio.
    this.apellido = "", //Un apellido, arranca vacio.
    this.edad = 0, //Una edad, arranca en cero.
    this.mostrarNombreCompleto = function() { //La funcion de mostrar nombre y apellido, como ya vimos.
        return `${this.nombre} ${this.apellido}`
    }
}

const user2 = new Persona(); // la palabra reservada "new", creara un nuevo objeto basado en el constructor Persona y le asignamos el nombre "user2".
console.log(user2); //Devolvera un listado de las propiedades de "user2" vacia, ya que no asignamos valores a las claves.

//Asignamos valores a las claves de las propiedades de "user2":

user2.name = "Carlos";
user2.apellido = "Alonso";
user2.edad = 45
console.log(user2.mostrarNombreCompleto()) // Imprime: Carlos Alonso

//Ya teniendo un constructor que crea usuarios nuevos, podemos crear la cantidad de usuario que queramos:

const user3 = Person();
user3.nombre = "Maria";
user3.apellido = "La Del Barrio";
user3.edad = 25
console.log(user3.mostrarNombreCompleto()); // Imprime: Maria La del Barrio

const user4 = Person();
user4.nombre = "Susana";
user4.apellido = "Gimenez";
user4.edad = 65
console.log(user4.mostrarNombreCompleto()); // Imprime: Susana Gimenez

//Constructor Objeto.

//En el ejemplo anterior creamos de cero un constructor. JavaScript ya taiene constructores
//predefinidos, como el constructor object (objeto).
//Este constructor lo que hace es devolver un objeto.
//Se usa para no tener que crear un nuevo constructor, si no que ya tenemos uno predefinido y
//podemos crear objetos genericos sin la necesidad de volver a declarar propiedades, etc.
//Y como es un nuevo objeto, anteponemos la palabra reservada "new".

//Se declara:
const string = new Object("Hola Mundo");
console.log(string); //Imprime: [String: "Hola Mundo"]

//Se le asigna un valor y una funcion:
const string = new Object("Hola Mundo");
string.test = function() {
    return this + "test"
}
console.log(string.test()); //Imprime: Hola Mundotest.

//Se le asigna una propiedad "nombre":
const string = new Object("Hola Mundo");
string.nombre = "String Especial"
string.test = function() {
    return this + "test"
}
console.log(string.nombre); //Imprime: String Espacial.

//Ejemplo de asignacion de propiedades y como mostrarlos:
const user = {
    nombre = "",
    apellido = "",
    edad = 0,
    mostrarNombreCompleto(){}
}

console.log(Object.keys(user)); //Imprime: [ "nombre", "apellido", "edad", "mostrarNombreCompleto" ]

//Si quiesieramos solo ver los valores de las claves:

const user = {
    nombre = "Marcelo",
    apellido = "Velez",
    edad = 34,
    mostrarNombreCompleto(){
        return this.nombre
    }
}

console.log(Object.values(user)); //Imprime: [ "Marcelo", "Velez", "34", [Function: mostrarNombreCompleto] ]

