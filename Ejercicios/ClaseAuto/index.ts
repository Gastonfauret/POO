class Car {
    private brand: string;
    private model: string;
    private engine: number;
    private speed: number = 0;
    private gear: number = 0;
    
    constructor(brand: string, model: string, engine: number) {
        this.brand = brand
        this.model = model
        this.engine = engine       
    }
    powerOn() {
        console.log('Power On'); 
        console.log(this.radio());       
        return this.engineOn();              
    }

    radio() {
        return 'The radio is playing.';        
    }

    engineOn() {
        return 'The engine is running. You can drive now';
    }

    driving() {
        if () {
            this.gear += 1
            console.log('Gear position: ' + this.gear);
            this.speed += 20;
            return 'Speed: ' + this.speed  + ' MPH';
            }
        else {
            this.gear = 5
            console.log('Gear position: 5');
            return 'Speed: ' + this.speed  + ' MPH.' + 'You have reached the maximum speed limit.';
        	}
        }            

    brake() {
        this.gear--
        console.log('Gear position: ' + this.gear);
        this.speed -= 20 
        return 'Speed: ' + this.speed  + ' MPH'
    }

    reverse() {
        this.gear = 0
        this.speed = 0
        return 'The reverse position is on.'
    }

    engineOff() {
        this.gear = 0
        this.speed = 0
        return 'The Car Engine and the Power is Off'
    }
}

const car1 = new Car('Fiat', 'Palio', 1.4)
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





