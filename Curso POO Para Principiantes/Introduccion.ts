// Programacion Orientada a Objetos (Object Oriented Programming - OOP):

//Es un paradigma de la programacion enfocada en objetos en vez de en funciones.
//Un paradigma en una serie de forma de resolver o recomendaciones para poder resolver un problema.

//La definicion de POO: Es la forma de modelar datos de nuestra vida real a travez de entidades 
//que llamamos objetos.

//En otras palabras es una forma de resolver un problema. En una forma de pensar.

//Objetos

//Se trata de un ente abstracto usado en programación que permite separar los diferentes componentes 
//de un programa, simplificando así su elaboración, depuración y posteriores mejoras.
//A los objetos se les otorga ciertas características en la vida real. 
//Cada parte del programa que se desea realizar es tratado como objeto, siendo así estas partes 
//independientes las unas de las otras.
//Los objetos se componen de 3 partes fundamentales: metodos, eventos y atributos.

//Objetos Literales

//Es literalmente un objeto, los creamos poniendolos dentro de llaves {}.
//Sirven para agrupar distintos datos que le pertenecen a una misma entidad y nombrarlos.

//Los siguientes datos, estan guardados y le pertenecen a la misma persona.

let nombre: string = "juan";
let apellido: string = "gonzalez";
let edad: number = 36;

//Entonces, podremos agruparlos todos en un mismos objeto.
//En vez de mostrar cada una de los objetos por separado, podemos guardarlos en un objeto "user":

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36
}

//Los elementos se separan con comas.
//Lo que hacemos aca es agrupar distintos valores ("juan", "gonzalez", 36), con nombres (nombre, apellido, edad).
//Estos nombres, se los conococe como "key" o clave, que son basicamente nombre de variables.
//Y su correspondente valor, de distinto tipo (string, string, number).
//Como podemos ver son pares de clave y valor.

//Un objeto no es otra cosa que pares de clave y valor.

//Supongamos que el user tiene hobbies, agregamos una clave hobbie y podemos asignar como valor una arreglo con varios
//hobbies.

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    hobbies: ["leer", "correr", "cantar"]
}

//Ahora queremos agregar la direccion del usuario, podemos agregar un objeto dentro del objeto.
//Osea, un objeto que contiene otro objeto.

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    hobbies: ["leer", "correr", "cantar"], /*Arreglo como valor de la clave "hobbie*/
    direccion: { 
        calle: "Avenida Libertad",/*Un conjunto de elementos como valor del objeto direccion*/
        partido: "Benito Juarez",        
    }
}

//Propiedades

//Son las caracteristicas de un objeto.
//Si tenemos un objeto "auto", podemos tener las siguientes propiedades:

const auto: {
    modelo: "fiat",
    color: "gris oscuro",
    motor: 1.4,
    precio: 1.500.000
}

// Como vimos anteriormente, podemos definir que las propiedades son pares de clave y valor, de un objeto.
//En este caso, del objeto "auto".

//En el caso anterior vimos un objeto tangible o conocido.
//Pero tambien podemos tener objetos, con sus propiedades, virtuales o no tangibles.

//Podemos encontrar, por ejemplo, una tarjeta virtual.

const tarjeta: {
    numero: 4000123456789010,
    marca: "visa",
    tipo: "gold",
    titular: "juan gonzalez",
    monto: 100
}

//Metodo

//Se les llama metodos a las acciones que pueden realizar un objeto.
//En el caso del auto: Arrancar, avanzar, detenerse, etc.
//En codigo las conocemos como funciones.
//Son las que nos permiten operar y alterar los datos de los objetos.

//Cuando una propiedad tiene como valor una funcion, significa que puede realizar determinada accion
//Esta propiedad pasa a llamarse "metodo", el objeto posee un metodo.

const auto: {
    modelo: "fiat",
    avanzar: function(){},
    detenerse: function(){}    
}

//El objeto "auto", posee una propiedad "modelo" y dos metodos (avanzar y detenerse).

//Otro Ejemplo, caso de la tarjeta:

const tarjeta: {
    numero: 4000123456789010,
    retiro: function(50){},
    deposito: function(100){}
}

//Ejemplo User:

function mostrarNombreCompleto() {
    return "Juan Gonzalez"
}

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    mostrarNombreCompleto: mostrarNombreCompleto
}

console.log(user.mostrarNombreCompleto());
//consola: juan gonzalez

//Podemos ver otra manera de lograr lo mismo, declarando la funcion como propiedad del objeto user:

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    mostrarNombreCompleto() {
        return "Juan Gonzalez"
    }
}

console.log(user.mostrarNombreCompleto());
//consola: juan gonzalez
