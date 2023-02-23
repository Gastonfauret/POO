var Car = /** @class */ (function () {
    function Car(brand, model, engine) {
        this.speed = 0;
        this.gear = 0;
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }
    Car.prototype.powerOn = function () {
        console.log('Power On');
        console.log(this.radio());
        return this.engineOn();
    };
    Car.prototype.radio = function () {
        return 'The radio is playing.';
    };
    Car.prototype.engineOn = function () {
        return 'The engine is running. You can drive now';
    };
    Car.prototype.driving = function () {
        if (this.gear < 6) {
            this.gear += 1;
            console.log('Gear position: ' + this.gear);
            this.speed += 20;
            return 'Speed: ' + this.speed + ' MPH';
        }
        else {
            this.gear = 5;
            console.log('Gear position: 5');
            return 'Speed: ' + this.speed + ' MPH.' + 'You have reached the maximum speed limit.';
        }
    };
    Car.prototype.brake = function () {
        this.gear--;
        console.log('Gear position: ' + this.gear);
        this.speed -= 20;
        return 'Speed: ' + this.speed + ' MPH';
    };
    Car.prototype.reverse = function () {
        this.gear = 0;
        this.speed = 0;
        return 'The reverse position is on.';
    };
    Car.prototype.engineOff = function () {
        this.gear = 0;
        this.speed = 0;
        return 'The Car Engine and the Power is Off';
    };
    return Car;
}());
var car1 = new Car('Fiat', 'Palio', 1.4);
console.log(car1);
console.log(car1.powerOn());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.brake());
console.log(car1.brake());
console.log(car1.reverse());
console.log(car1.reverse());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.engineOff());
