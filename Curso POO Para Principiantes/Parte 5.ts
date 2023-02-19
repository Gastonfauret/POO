//Clase

//Una clase es un elemento de la programación orientada a objetos que actúa como una plantilla 
//y va a definir las características y comportamientos de una entidad. 
//La clase va a ser como un molde a partir del cual vamos a poder definir entidades.
//Para crear una clase se utiliza la palabra reservada class y a continuación el nombre de la 
//clase. La definición de la clase se pone entre las llaves de apertura y cierre. a
//El nombre de la clase empieza por letra mayúscula.
//La clase en si en un conjunto de metodos, un contructor que define propiedades
//y podemos añadir los metodos que queramos.

//Una instancia u objeto de una clase es una representación concreta y específica de una clase 
//y que reside en la memoria del ordenador. 
//Los atributos son las caracterísiticas individuales que diferencian un objeto de otro y 
//determinan su apariencia, estado u otras cualidades.

//Con el constructor, para crear un nuevo objeto haciamos asi:
function Person(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

//Con clase, hacemos lo mismo de la siguiente manera:
class Person {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
}

//Creamos 2 nuevos objetos a partir de la clase 'Person':
const user1 = new Person('Juan', 'Perez')
const user2 = new Person('Carlos', 'Mendoza')

//Imprimimos:
console.log(user1); // Person  { nombre: 'Juan', apellido: 'Perez'}
console.log(user2); // Person  { nombre: 'Carlos', apellido: 'Mendoza'}

//Para añadir un metodo a la clase(padre), haremos lo siguiente:

class Person {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
    saludar() {
        return `Hola Mi nombre es ${this.nombre}`
    }
}

//Instanciamos los nuevos objetos(hijos) a partir de la clase Person(padre):
console.log(user1.saludar()); // Hola Mi nombre es Juan
console.log(user2.saludar()); // Hola Mi nombre es Carlos



