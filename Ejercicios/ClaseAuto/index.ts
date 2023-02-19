class Car {
    private brand: string;
    private model: string;
    private engine: number;
    constructor(brand: string, model: string, engine: number) {
        this.brand = brand
        this.model = model
        this.engine = engine       
    }
    powerOn() {
        console.log('El Auto esta contacto.');        
        return (this.radio());              
    }    
    radio() {
        return 'La Radio esta Encendida.';        
    }
}

const car1 = new Car('Fiat', 'Palio', 1.4)
console.log(car1);
console.log(car1.powerOn()); 



