var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }
    Auto.prototype.contacto = function () {
        console.log('El Auto esta encendido');
        return (this.radio());
    };
    Auto.prototype.radio = function () {
        return 'La Radio esta Encendida.';
    };
    return Auto;
}());
var auto1 = new Auto('Fiat', 'Palio', 1.4);
console.log(auto1);
console.log(auto1.contacto());
var auto2 = new Auto('Fiat', 'Siena', 1.4);
console.log(auto2);
console.log(auto2.contacto());
