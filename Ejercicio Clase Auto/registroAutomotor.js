"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
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
            console.log("El Vehiculo \"".concat(nuevoAuto.marca, "\" ha sido a\u00F1adido a la base de datos"), baseDeDatosAutos);
        }
        else {
            console.log("El vehiculo \"".concat(nuevoAuto, "\" no ha sido a\u00F1adido a la base de datos"));
        }
    };
    RegistroAutomotor.prototype.consultaBaseDeDatos = function (nombre, baseDeDatosAutos) {
        var autoEncontrado = baseDeDatosAutos.find(function (baseDeDatosAutos) { return baseDeDatosAutos.name === nombre; });
        if (autoEncontrado) {
            console.log("El vehiculo \"".concat(nombre, "\" se encuentra en la base de datos"));
            return autoEncontrado;
        }
        else {
            console.log("\"".concat(nombre, "\" no se encuentra en la base de datos"));
        }
    };
    RegistroAutomotor.prototype.modificaArchivo = function (nombre, baseDeDatosAutos, dato) {
        var archivoModificado = this.consultaBaseDeDatos(nombre, baseDeDatosAutos);
        if (archivoModificado) {
            archivoModificado.nombre = dato;
            console.log("The book \"".concat(nombre, "\" has been modified. Now, its called \"").concat(dato, "\""));
        }
        else {
            console.log("The book has not been modified");
        }
    };
    RegistroAutomotor.prototype.eliminaArchivo = function (nombre, baseDeDatosAutos) {
        var archivoEliminado = baseDeDatosAutos.findIndex(function (baseDeDatosAutos) { return baseDeDatosAutos.name == nombre; });
        if (archivoEliminado >= 0) {
            baseDeDatosAutos.splice(archivoEliminado, 1);
            console.log("El vehiculo \"".concat(nombre, "\" fue eliminado"));
            console.log(baseDeDatosAutos);
            return baseDeDatosAutos;
        }
        else {
            return "El vehiculo ".concat(nombre, " no pudo ser eliminado");
        }
    };
    RegistroAutomotor.prototype.arrayAJason = function (baseDeDatosAutos) {
        var fs = require('fs');
        var file = './registro autos.json';
        var data = JSON.stringify(baseDeDatosAutos);
        fs.writeFile(file, data, function (error) {
            if (error) {
                return console.log(error);
            }
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
