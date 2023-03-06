"use strict";
exports.__esModule = true;
var claseAuto_js_1 = require("./claseAuto.js");
var registroAutomotor_js_1 = require("./registroAutomotor.js");
var fs = require('fs');
var registro = [];
var manage = new registroAutomotor_js_1.RegistroAutomotor;
manage.arrayAJason(registro);
var file = './registro autos.json';
var data = JSON.stringify(registro);
fs.writeFile(file, data, function (error) {
    if (error) {
        return console.log(error);
    }
});
var palio = new claseAuto_js_1.Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
manage.anadeAutos(registro, palio);
