import { Device } from "./device.js";

export function MicrowaveOven(model) {
  Device.call(this, model);
  this._power = '0';
}

MicrowaveOven.prototype = Object.create(Device.prototype);
MicrowaveOven.prototype.constructor = MicrowaveOven;

MicrowaveOven.prototype.increasePower = function () {
  if (!this._state) {
    alert("Turn on the Microwave Oven");
  } else if (this._power < 700) {
    this._power =Number(this._power) + 100;
  }
};

MicrowaveOven.prototype.decreasePower = function () {
  if (this._power >= 100 && this._power <= 700 && this._state === false) {
    alert("Turn on the Microwave Oven");
  } else if (this._power > 0) {
    this._power =Number(this._power) - 100;
  }
};
