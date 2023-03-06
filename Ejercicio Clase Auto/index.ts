import {Auto} from "./claseAuto.js";
import { RegistroAutomotor } from "./registroAutomotor.js";
const fs = require('fs');

const registro: [] = [];
const manage = new RegistroAutomotor;
manage.arrayAJason(registro);

var file = './registro autos.json';
var data = JSON.stringify(registro);
        
fs.writeFile(file, data, function(error) {
    if(error) {
        return console.log(error);
    }
});

const palio: Auto = new Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);

manage.anadeAutos(registro, palio);

