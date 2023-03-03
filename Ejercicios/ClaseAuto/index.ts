//Se declara la Clase Auto, y se declaran sus variables:
class Car {
    private brand: string;
    private model: string;
    private engine: number;
    private speed: number = 0;
    private gear: number = 0;
    
    //Se declara el constructor de la clase y se le pasan los parametros:
    constructor(brand: string, model: string, engine: number) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;     
    }
    //Funcion que pone en contacto, prende la radio y enciende el motor:
    powerOn(): String {
        console.log('Power On'); 
        console.log(this.radio());       
        return this.engineOn();              
    }
    //Funcion que prende la radio:
    radio(): String {
        return 'The radio is playing.';        
    }
    //Funcion el motor esta encendido:
    engineOn(): String {
        return 'The engine is running. You can drive now';
    }
    //Funcion Manejar.
    //Sube los cambios en base a la velocidad.
    //Sube la velocidad en 20 y pasado los 100 tira un mensaje:
    driving(): String {
        if (this.gear >= 0 && this.gear < 5 && this.speed <= 100) {
            this.gear++
            console.log(`Gear: ${this.gear}`);
            this.speed += 20;
            return `Speed: ${this.speed} MPH`            
        } 
        else {
            this.gear = 5
            console.log(`Gear: ${this.gear}`);
            this.speed += 20;
            return `Speed: ${this.speed} MPH. You have reached the maximus speed limit.`            
        }
    }            
    //Funcion de frenado, dismunuye en 20 la velocidad y en 1 los cambios
    //en cada llamado de la funcion:
    brake(): String {
        this.gear--
        console.log(`Gear position: ${this.gear}`);
        this.speed -= 20 
        return `Speed: ${this.speed} MPH`
    }
    //Funcion Marcha atras:
    //Velocidad y cambios en 0.
    reverse(): String {
        this.gear = 0
        this.speed = 0
        return 'The reverse position is on.'
    }
    //Funcion apagado, cambios y velocidad en 0:
    engineOff(): String {
        this.gear = 0
        this.speed = 0
        return 'The Car Engine and the Power is Off'
    }
}
//Se declara una nueva instancia:
const car1 = new Car('Fiat', 'Palio', 1.4)
//Se llaman los metodos del auto:
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
console.log(car1.driving());
console.log(car1.driving());
console.log(car1.brake()); 
console.log(car1.brake());
console.log(car1.engineOff()); 

//Se declara una nueva instancia:
const car2 = new Car('Chevrolet', 'Onix', 1.3)
//Se llaman los metodos del auto:
console.log(car2);
console.log(car2.powerOn()); 
console.log(car2.driving()); 
console.log(car2.driving()); 
console.log(car2.driving()); 
console.log(car2.brake()); 
console.log(car2.brake());
console.log(car2.reverse());
console.log(car2.reverse());
console.log(car2.driving()); 
console.log(car2.driving()); 
console.log(car2.driving()); 
console.log(car2.driving()); 
console.log(car2.driving());
console.log(car2.driving());
console.log(car2.driving());
console.log(car2.driving());
console.log(car2.brake()); 
console.log(car2.brake());
console.log(car2.engineOff()); 





