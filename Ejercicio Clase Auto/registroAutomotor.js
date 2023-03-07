"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
var baseDeDatosAutos = [];
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.actualizacion = function (baseDeDatosAutos) {
        console.log(baseDeDatosAutos);
    };
    RegistroAutomotor.prototype.anadeAutos = function (baseDeDatosAutos, nuevoAuto) {
        if (baseDeDatosAutos.push(nuevoAuto)) {
            this.arrayAJason(baseDeDatosAutos);
            console.log("The car data has been successfully added.", nuevoAuto);
        }
        else {
            console.log("The car data has not been added.");
        }
    };
    RegistroAutomotor.prototype.consultaBaseDeDatos = function (nombre, baseDeDatosAutos) {
        var autoEncontrado = baseDeDatosAutos.filter(function (baseDeDatosAutos) { return baseDeDatosAutos.nombre == nombre; });
        if (autoEncontrado) {
            console.log("The car you are looking for is in the database.");
        }
        else {
            console.log("The required data were not found.");
        }
    };
    // modificaArchivo(nombre: string, baseDeDatosAutos, dato: string) {
    //     let archivoModificado = this.consultaBaseDeDatos(nombre, baseDeDatosAutos);
    //     if (archivoModificado) {
    //         archivoModificado.marca = dato;
    //         console.log(`The database has been modified: It can be find as: "${dato}".`);
    //     } else {
    //         console.log(`The database could not be modified`);                            
    //     }
    // }
    RegistroAutomotor.prototype.eliminaArchivo = function (nombre, baseDeDatosAutos) {
        var archivoEliminado = baseDeDatosAutos.filter(function (element) { return element.nombre === nombre; });
        if (archivoEliminado) {
            console.log("The datafile has been deleted");
        }
        else {
            return "The datafile could not be deleted";
        }
    };
    RegistroAutomotor.prototype.arrayAJason = function (baseDeDatosAutos) {
        var updateCar = JSON.stringify(baseDeDatosAutos);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8');
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
