import {Auto} from "./claseAuto.js";
import { RegistroAutomotor } from "./registroAutomotor.js";
import * as fs from "fs";

let registro: [] = [];
const manage = new RegistroAutomotor;

try {
    const data:string = fs.readFileSync('./registro autos.json', "utf8");
    let concess = JSON.parse(data);
    registro = concess.map((car:{}) => car);
} catch (error) {
    let errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}

const palio: Auto = new Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
const cronos: Auto = new Auto ('Chevrolet', 'Cronos', 1.4, 'ABC-012', 123456788, 987654322);
const citroen: Auto = new Auto ('C3', 'Airwave', 1.4, 'ABC-001', 123456888, 987654222);
const fiesta: Auto = new Auto ('Ford', 'Fiesta', 1.4, 'ABC-002', 123458888, 987652222);
const civic: Auto = new Auto ('Honda', 'Civic', 1.8, 'ABC-003', 123458888, 987622222);
const gol: Auto = new Auto ('Volkswagen', 'Gol', 1.4, 'ABC-004', 123488888, 987222222);

// Se Añaden los autos:
manage.anadeAutos(registro, palio);
manage.anadeAutos(registro, cronos);
manage.anadeAutos(registro, citroen)
manage.anadeAutos(registro, fiesta);
manage.anadeAutos(registro, civic);
manage.anadeAutos(registro, gol);


// Consulta de Datos:
manage.consultaBaseDeDatos('Chevrolet', registro);
manage.consultaBaseDeDatos('Honda', registro);

// // // Modifica Datos de Autos:
// manage.modificaArchivo('Ford', registro, 'Fiestita');
// manage.modificaArchivo('C3', registro, 'Bolita');

// Elimina datos: 
manage.eliminaArchivo('Palio', registro);
manage.eliminaArchivo('Chevrolet', registro);

console.log(registro);









