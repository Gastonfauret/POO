var Car = /** @class */ (function () {
    function Car(brand, model, engine) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }
    Car.prototype.powerOn = function () {
        console.log('El Auto esta contacto.');
        return (this.radio());
    };
    Car.prototype.radio = function () {
        return 'La Radio esta Encendida.';
    };
    return Car;
}());
var car1 = new Car('Fiat', 'Palio', 1.4);
console.log(car1);
console.log(car1.powerOn());
