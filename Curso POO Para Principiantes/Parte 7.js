//Asociacion:

//Declaramos la clase Person a partir de la cual creamos objetos:
class Person {
    constructor {nombre, apellido} {
        this.nombre
        this.apellido
    }
}

const juan = new Person('juan', 'perez')
const maria = new Person('maria', 'gutierrez')

//Si queremos decir que juan es el padre de maria, podemos relacionarlos
//con la propiedad "parent". 
//Pero si quitamos esta relacion ambos objetos siguen funcionando de manera independiente.

maria.parent = juan;

//Si imprimimos podemos ver que 'maria' tiene el detalle del 'parentesco' con juan
console.log(maria);//Person {nombre: 'maria', apellido: 'gutierrez', parent: Person{nombre: 'juan', apellido: 'perez'}}
console.log(juan); //Person {nombre: 'juan', apellido: 'perez'}

//Agregacion:

//Es una forma de asociacion en la que relaciona dos objetos o mas, pero algunos objetos tienen un rol mas importamte que otro.
//El que tiene el rol mayor es el que determina el contenedor de los demas objetos y la relacion que tienen estos.
//El objeto de mayor rol se lo llama agregado (aggregate) y los objetos que estan dentro de este mas grande se lo conoce como 'componente' 
//(component).
// Pero aun asi cada objeto puede mantener una vida independiente.

//Creamos un objeto literal llamado 'compania' con sus propiedades.

const compania = {
    nombre: 'Compania X' //Prpopiedad nombre
    empleados: [] //Propiedad emplados cuyo valor es un arreglo vacio (por el ahora).
}

//Declaramos la clase, con la cual crearemos los objetos que añadiremos a la propiedad 'empleados' del objeto 'compania'.
class Person {
    constructor {nombre, apellido} {
        this.nombre
        this.apellido
    }
}

//Creamos dos objeto a partir de la clase Person, que vamos añadir como empleados a compania, usando el metodo 'push':
const juan = new Person('juan', 'perez')
const maria = new Person('maria', 'gutierrez')

compania.empleados.push(juan) //Agregamos a juan en el arreglo vacia de empleados en el objeto compania.
compania.empleados.push(maria) //Agregamos a maria en el arreglo vacia de empleados en el objeto compania.

//Imprimimos el valor de compania y vemos que maria y juan se han agregado a la propiedad empleados:
console.log(compania); // { nombre: 'Compania X', 
                            //empleados: 
                            //Person { nombre: 'juan', apellido: 'peres'},
                            //Person { nombre: 'maria', apellido: 'gutierrez}}}

//Composicion:

//Cuando hablamos de Composicion, estamos hablando de un tipo fuerte de asociacion. En el que muchos objetos pueden pertenecer a otro objeto,
//que tiene un rol mayor, pero ninguno de estos va a tener una vida independiente.

//Creamos un objeto persona:

const persona = {
    nombre: 'jose'
    apellido: 'garcia'
    direccion { //Propiedad: direccion, valor: un listado de objetos.
        calle: 'Avenida Libertad',
        partido: 'Benito Juarez',
        provincia: 'Buenos Aires',
        pais: 'Argentina'
    }
}

//Si quitamos la propiedad 'direccion'de 'persona' y lo intentamos utilizar de forma independiente,
//No lo podremos hacer ya que la propiedad esta fuertemente relacionada con el objeto persona.
//Un objeto no tiene vida independiente cuando pertenece a otro.