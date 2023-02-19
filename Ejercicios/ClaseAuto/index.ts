class Auto {
    private marca: string;
    private modelo: string;
    private motor: number;
    constructor(marca: string, modelo: string, motor: number) {
        this.marca = marca
        this.modelo = modelo
        this.motor = motor        
    }
    contacto() {
        console.log('El Auto esta encendido.');        
        return (this.radio());              
    }    
    radio() {
        return 'La Radio esta Encendida.';        
    }
}

const auto1 = new Auto('Fiat', 'Palio', 1.4)
console.log(auto1);
console.log(auto1.contacto()); 



