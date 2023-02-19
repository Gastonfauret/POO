//Encapsulacion

//Es cuando  hablamos de concentrar datos y funcionalidad ocultando los detalles internos
// Cuando creamos un metodo y le vamos a pasar propiedades y metodos, el usuario no tiene 
//que conocer como funciona internamente el objeto para utilizarlos. Simplemente puede utilizar
//los metodos y de esta forma va a estar usando nuestro objeto y va a poder llegar a resolver 
//un problema.

//La idea de la encapsulacion es simplicar el uso de un objeto.
//El usuario no debe saber como funciona internamente, 
//debe saber que funciona y es todo.

//La idea principal del encapsulamiento es similar al conceptos visto en clase de declaracion
//de variables locales y globales.
//Si ponemos un objeto, un variable o un conjunto de elementos dentro de un objeto, solo podremos 
//acceder a ellos mediante una funcion.

//Ejemplo:

//Declaramos una variable que contendra una funcion:

const seguridad = function() {
    //Declaracion local (privada). Solo podremos acceder a ella con una funcion.
    const tarjetaCredito = '1111-2222-3333'

    return {
        //Declaracion Global (Publica): Con esta funcion podremos devolver el valor de la const
        //de la linea 24 y hacerla publica o global.
        mostrarTarjetaCredito: function() {
            console.log('Su tarjeta de credito es ' + tarjetaCredito);
        }
    }
}

//Hacemos el llamado a la funcion de la linea 22:
var sec = seguridad();

//Llamamos a la funcion 'mostrarTarjeta':
sec.tarjetaCredito(); //Imprime: Su tarjeta de credito es 1111-2222-3333

//Intentamos modificar el valor de la constante 'tarjetaCredito', pero nos tira error, 
//debido a que no podemos acceder a ella de forma directa y mucho menos modificarla.
sec.tarjetaCredito = '11';

//Llamamos nuevamente a la funcion 'mostrarTarjeta', para mostrar que no fue modificada:
sec.tarjetaCredito(); //Imprime: Su tarjeta de credito es 1111-2222-3333

//Herencia.

//La herencia en JavaScript es un concepto que nos permite hacer que un objeto herede los 
//comportamientos de otro, al igual que lo harían las características de un ser vivo en la 
//vida real. Además, podemos ir añadiendo comportamientos en la línea de herencia para que 
//cada objeto tenga características únicas o nuevas.

//Los objetos hijos deberan hereda todas las caracteristicas del objeto padre, y poder agregar
//nuevas propiedades a las ya heredadas de ser necesarios.
//Es por eso que que el objeto padre debera contener propiedades genericas, y los objetos hijos
//propiedades mas espesificas.

//Ejemplo Teorico:

Objeto User:                     Objeto Programador:
    nombre;                         Nombre;
    apellido;                       Apellido;
                                    Lenguaje;

//Tenemos dos objetos distintos que comparten 2 propiedades: nombre y apellido.
//Entonces podemos crear al objeto User como padre y que Objeto Programador hereda las propiedades
//que comparten y añada la propiedad lenguaje:

Objeto User:
    nombre;
    apellido;
        |
        |//Programador Hereda de User y añade su propiedad lenguaje.
        |> Objeto Programador:
            lenguaje.

//En programacion esta el concepto DRY (Don't Repeat Yourself - No Te Repitas), al generar herencia
//entre distintos objetos estamos evitando la repeticion de codigo.

//Ejemplo Practico:

//Veremos herencia a travez de clases de objetos:

//Creamos la clase padre, con su constructor que creara las propiedades del objeto:
class Person {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Creamos la clase hijo que heredara de Person(padre). Para hacer esto usamos la palabra reservada
//'extends':
//Para traer las propiedades del padre al hijo usamos la palabra reservada 'super()' con sus 
//correspondientes parametros.

class Programador extends Person { //Clase hijo que hereda de padre.
    constructor(nombre, apellido, lenguaje) { //Contructor para crear las propiedades.
        super(nombre, apellido); //Palabra reservada 'super' para traernos las propiedades del padre.
        this.lenguaje = lenguaje //Añadimos una nueva propiedad al hijo.
    }
}

//Creamos un nuevo objeto a partir de la clase 'Person'.
const person = Person('maria', 'perez')
console.log(person); //Imprime: Person {nombr: 'maria', 'perez'}

//Creamos un nuevo objeto a partir de la clase Programador:
const programador = new Programador('jose', 'gonzalez', 'javascript')
console.log(programador); //Imprime: Programador {nombre: 'jose', 'gonzalez', 'javascript'}

/*Polimorfismo

Definicion: Es la capacidad que tienen ciertos lenguajes para hacer que, 
al enviar el mismo mensaje (o, en otras palabras, invocar al mismo método) desde distintos 
objetos, cada uno de esos objetos pueda responder a ese mensaje (o a esa invocación) de forma 
distinta.

Cuando nosotros ejecutamos un metodo, este puede depender de otros metodos que vienen de otros 
objetos heredados, para poder reducir esta complejidad de que un metodo llame tantos metodos para 
poder devolver una respuesta usamos el polimorfismo. 
Esto nos permite reducir codigo y tener codigo mas compacto ya que vamos
a utilizar un mismo metodo para realizar varias acciones.

Cuando hablamos de polimorfismo hablamos de caracteristicas espesificas que debe cumplir el lenguaje>

Sobrecarga: Es cuando algunos metodos pueden tomar distintos parametros con distintos tipo de datos
y al final poder procesarlos sin problemas.*/

//Ejemplo Practico:

//Creamos una funcion que va a contar caracteres:
//Pasamos un parametro x.
//En caso de ser un numero, la funcion 'toString' convertira el numero en letras.
function contarItems(x) {
    return x.toString().lenght
}

console.log(contarItems(1000)); //Imprime: 4.
console.log(contarItems('Hola Mundo')); //Imprime: 10.

//Aca vemos que con una sola funcion podemos contar los caracteres de 2 tipos distintos de datos.
//De tipo number en la linea 139 y de tipo string en la linea 140.

//Ejemplo Practico nro. 2:

//Creamos una funcion suma, que simplemente suma numeros:
function suma(x = 0, y = 0, z = 0) {
    return x + y + z
}

console.log(suma(10, 20)); //Imprime: 30.
console.log(suma(10, 20, 30)); //Imprime: 60.

/*En este ejemplo vemos que podemos usar el metodo suma para sumar 2 o 3 numeros.
Al pasar en la linea 150 valores predefinidos, evitamos un undefined, si solo pasamos,
al llamar a la funcion, 2 parametros (el tercer parametro quedaria en cero).*/

/*Polimorfismo Parametrico: Nos permite manejar distintos tipos de datos genericos sin ningun tipo de dato
espesifico. Osea, puedo pasarle cualquier objeto con cualquier estructura sin conocerla en detalle y aun 
asi el metodo puede procesarlo.*/

//Ejemplo Practico Nro. 3:

//Creamos una clase Stack:
function Stack() {
    this.item = []

    this.push = function(item) { //Creamos una funcion
        this.item.push() //La funcion añadira los item que pasemos por parametro al arreglo vacio de la linea 169.
    }
}

//Creamos un nuevo objeto a partir de la Clase Stack:
const stack = new Stack()
stack.push('Hola Mundo') //Llamamos a la funcion push y pasamos un parametro de tipo string.
console.log(stack); //Imprime: Stack { item: ['Hola Mundo'], push: {function}}

//Creamos otro nuevo objeto a partir de la Clase Stack:
const stack2 = new Stack()
stack2.push(1000)
console.log(stack2); //Imprime: Stack { item: ['1000'], push: {function}}

//Aca vemos como podemos pasarle por parametro, cualquier tipo de datos, sin ninguna restriccion.



