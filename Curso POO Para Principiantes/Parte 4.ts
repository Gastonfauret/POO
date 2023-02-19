//Palabra clave new

//Se usa para crear un "nuevo" constructor.
//Si no lo anteponemos al nombre del nuevo constructor, nos dara valor "undefined".

function Person() {
    this.nombre = "",
    this.apellido = ""
}

const person = new Person()
console.log(person); //Imprime Person { nombre: "" , apellido: "" }

//Prototype

//Se usa para agregar una propiedad o una funcion al constructor padre,
// y que este pueda ser usado por los objetos creados a partir del contructor padre.

//Comenzamos con un constructor (padre).

function Person(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.saludo = function() {
        return `Hola, Soy ${this.nombre} ${this.apellido}`
    }
}

//Creamos tres objetos (hijos) a partir del contructor (padre).

const pedro = new Person('Pedro', 'Pascal')
const bella = new Person('Bella', 'Rampsey')
const juan = new Person('Juan', 'Perez')

//Llamamos a la funcion en la linea 25 para mostrar lam funcion saludo:

console.log(pedro.saludo()); //Hola, Soy Pedro Pascal
console.log(bella.saludo()); //Hola, Soy Bella Rampsey
console.log(juan.saludo()); //Hola, Soy Juan Perez

//Para añadir una funcion al constructor (padre) y que pueda ser usada por los objetos hijos,
//Usaremos la palabra reservada 'prototype:

Person.prototype.saludoAmable = () {
    return `Hola, Mi nombre es ${this.name} ${this.apellido}. Mucho Gusto`
}

//Imprimimos la nueva funcion de cada nuevo objeto:

console.log(pedro.saludoAmable()); //Hola, mi nombre es Soy Pedro Pascal. Mucho gusto.
console.log(bella.saludoAmable()); //Hola, mi nombre es Soy Bella Rampsey. Mucho gusto.
console.log(juan.saludoAmable()); //Hola, mi nombre es Soy Juan Perez. Mucho gusto.

//Tambien podemos hacer esto agregando un nuevo objeto al constructor (padre):

Person.prototype.edad = 42

//E imprimimos la nuevo propiedad en cada nuevo objeto (hijos):

console.log(pedro.edad); // 42
console.log(bella.edad); // 42
console.log(juan.edad); // 42

//En ambos casos (funcion o propiedad), el objeto nuevo creado (hijos), los usa haciendo 
//referencia a cualquiera de los a travez del constructor (padre).

//Como vimos anteriormente JavaScript ya tiene constructores creados de manera predeterminada.
//Uno de ellos es un constructor 'String'. Para poder utilizarlos no es necesario crearlos,
//si no que ya podemos crear nuevos objetos de tipo strings.

//Creamos un nuevo objeto a partir del constructor predeterminado 'String
const nuevoString = new String('Hola Mundo')

//Añadimos una funcion llamada "concatenaPalabra" que concatenará la palabra 'patito de goma':\
String.prototype.concatenaPalabra = function() {
    return this + ' ' + 'patito de goma.'
}

//Imprimimos en consola:
//Podemos Usar la funcion de manera independiente:
console.log('Hola Mi nombre es Pedro y tengo un'.concatenaPalabra()); // Hola Mi nombre es Pedro y tengo un patito de goma.

//O haciendo referencia a la constante declarada en la linea 72.
console.log(nuevoString.concatenaPalabra()); // Hola Mundo patito de goma.



