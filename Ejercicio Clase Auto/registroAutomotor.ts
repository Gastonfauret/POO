import {Auto} from './claseAuto';

const baseDeDatosAutos: string [] = [];

export class RegistroAutomotor{
    actualizacion(baseDeDatosAutos: Auto) {
        console.log(baseDeDatosAutos);       
    } 

    anadeAutos(baseDeDatosAutos, nuevoAuto: Auto) {
        if(baseDeDatosAutos.push(nuevoAuto)) {
            this.arrayAJason(baseDeDatosAutos)
            console.log(`El Vehiculo "${nuevoAuto.marca}" ha sido añadido a la base de datos`, baseDeDatosAutos);
        } else {
            console.log(`El vehiculo "${nuevoAuto}" no ha sido añadido a la base de datos`);
        }
    }

    consultaBaseDeDatos(nombre: string, baseDeDatosAutos) {
        const autoEncontrado = baseDeDatosAutos.find(baseDeDatosAutos => baseDeDatosAutos.name === nombre)
        if (autoEncontrado) {
            console.log(`El vehiculo "${nombre}" se encuentra en la base de datos`);
            return autoEncontrado;                 
        } else {
            console.log(`"${nombre}" no se encuentra en la base de datos`);
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
        var data = JSON.stringify(baseDeDatosAutos);
        
        fs.writeFile(file, data, function(error) {
            if(error) {
                return console.log(error);
            }            
            });                
        }
    }
    

