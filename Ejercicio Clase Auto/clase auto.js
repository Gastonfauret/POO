"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var registroAutomotor_1 = require("./registroAutomotor");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    // private marca: string;
    // private modelo: string;
    // private motor: number;
    // private patente: string;
    // private nroChasis: number;
    // private nroMotor: number;
    function Auto(marca, modelo, motor, patente, nroChasis, nroMotor) {
        return _super.call(this, marca, modelo, motor, patente, nroChasis, nroMotor) || this;
    }
    return Auto;
}(registroAutomotor_1["default"]));
exports["default"] = Auto;
