//import Auto from "./clase auto";

class registroAutomotor{
    private marca: string;
    private modelo: string;
    private motor: number;
    private patente: string;
    private nroChasis: number;
    private nroMotor: number;
    
    baseDeDatosAutos: any [] = [];

    constructor(marca: string,  modelo: string, motor: number, patente: string,  nroChasis: number, nroMotor: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.patente = patente;
        this.nroChasis = nroChasis;
        this.nroMotor = nroMotor;
    }

    anadeAutos(baseDeDatosAutos: any, nuevoAuto: any) {
        if(baseDeDatosAutos.push(nuevoAuto)) {
            this.arrayAJason(baseDeDatosAutos)
            console.log(`El Vehiculo "${nuevoAuto.name}" ha sido añadido a la base de datos`);
        } else {
            console.log(`El vehiculo "${nuevoAuto.name}" no ha sido añadido a la base de datos`);
        }
    }

    consultaBaseDeDatos(nombre: string, baseDeDatosAutos) {
        const autoEncontrado = baseDeDatosAutos.find(baseDeDatosAutos => baseDeDatosAutos.name === nombre)
        if (autoEncontrado) {
            console.log(`El vehiculo "${nombre}" se encuentra en la base de datos`);
            return autoEncontrado;                 
        } else {
            console.log(`"${nombre}" doesn't exist in the library`);
        }
    }

    modificaArchivo(nombre: string, baseDeDatosAutos, dato: string) {
        let archivoModificado = this.consultaBaseDeDatos(nombre, baseDeDatosAutos);
        if (archivoModificado) {
            archivoModificado.nombre = dato;
            console.log(`The book "${nombre}" has been modified. Now, its called "${dato}"`);
        } else {
            console.log(`The book has not been modified`);                            
        }
    }

    eliminaArchivo(nombre: string, baseDeDatosAutos) {
        const archivoEliminado = baseDeDatosAutos.findIndex(baseDeDatosAutos => baseDeDatosAutos.name == nombre);
        if(archivoEliminado >= 0){  
            baseDeDatosAutos.splice(archivoEliminado, 1)
            console.log(`El vehiculo "${nombre}" fue eliminado`);
            console.log(baseDeDatosAutos);
            return baseDeDatosAutos;
            } else {
                return `El vehiculo ${nombre} no pudo ser eliminado`;
            }
        }

    arrayAJason(baseDeDatosAutos) {
        var fs = require('fs');
        var file = './registro autos.json';
        var data = JSON.stringify(this.baseDeDatosAutos);
        
        fs.writeFile(file, data, function(error) {
            if(error) {
                return console.log(error);
            }            
            });                
        }
    }

    export default registroAutomotor;
