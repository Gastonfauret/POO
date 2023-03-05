import RegistroAutomotor, {} from "./registroAutomotor";

class Auto extends RegistroAutomotor {
    // private marca: string;
    // private modelo: string;
    // private motor: number;
    // private patente: string;
    // private nroChasis: number;
    // private nroMotor: number;

    constructor(marca: string,  modelo: string, motor: number, patente: string,  nroChasis: number, nroMotor: number) {
        super(marca, modelo, motor, patente, nroChasis, nroMotor);
    }
}

export default Auto;