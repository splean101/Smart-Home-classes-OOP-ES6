import { Device } from "./device.js";

export function AirConditioner(model) {
  Device.call(this, model);
  this._temp = 20;
}

AirConditioner.prototype = Object.create(Device.prototype);
AirConditioner.prototype.constructor = AirConditioner;

AirConditioner.prototype.changeTemp = function (option) {
  if (this._state === false) {
    alert("Turn the Air Conditioner ON");
  } else if (option === "+" && this._temp < 28) {
    ++this._temp;
  } else if (option === "-" && this._temp > 15) {
    --this._temp;
  }
};
