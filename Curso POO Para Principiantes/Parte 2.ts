//this

//Se usa para hacer referencia a un objeto o propiedad en particular.
//Si lo usamos dentro de un objeto hara referencia al objeto completo.

const user = {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    mostrarNombreCompleto() {
        console.log(this) 
        return "juan gonzalez"
    }
}

console.log(user.mostrarNombreCompleto())

Consola: {
    nombre: "juan",
    apellido: "gonzalez",
    edad: 36,
    mostrarNombreCompleto() {
        console.log(this)
        return "juan gonzalez"
    }
} /*linea 11*/

juan gonzalez /*linea 12*/

//Si queremos llamar una sola propiedad y ver en consola su valor, haremos lo siguiente:

const user = {
    nombre: "joaquin",
    apellido: "garcia",
    edad: 36,
    mostrarNombreCompleto() {
        console.log(this.nombre) 
        return "juan gonzalez"
    }
}

console.log(user.mostrarNombreCompleto())

Consola: joaquin /*Linea 37*/
juan gonzalez /*Linea 42*/

//Para concatenar nombre y apellido:

const user = {
    nombre: "joaquin",
    apellido: "garcia",
    edad: 36,
    mostrarNombreCompleto() {
        return this.nombre + " " + this.apellido
    }
}

console.log(user.mostrarNombreCompleto())
Consola: joaquin garcia /*Linea 58*/

//Ejemplo con operaciones matematicas:

const cuenta = {
    numero: "1234567890",
    monto: 100,
    deposito(cantidad) {
        this.monto = this.monto + cantidad /*Suma dinero al monto */
    }, 
    extraccion(cantidad) {
        this.monto = this.monto - cantidad /*Resta dinero al monto */
    }
}
cuenta.deposito(100) /*Suma 100 al monto y le pasa el parametro de "cantidad*/
cuenta.deposito(100) /*Suma 100 al monto y le pasa el parametro de "cantidad*/
cuenta.deposito(100) /*Suma 100 al monto y le pasa el parametro de "cantidad*/
console.log(monto) /*Muestra el valor de monto (400)*/

cuenta.extraccion(200) /*Resta 200 al monto y le pasa el parametro de "cantidad*/
cuenta.extraccion(200) /*Resta 200 al monto y le pasa el parametro de "cantidad*/
console.log(monto) /*Muestra el valor de monto (0)*/


