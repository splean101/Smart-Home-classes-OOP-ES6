import { Device } from './device.js';

export class MicrowaveOven extends Device {
  constructor(model) {
    super (model);
    this._power = '0';
  }
  increasePower() {
    if (!this._state) {
      alert('Turn on the Microwave Oven');
    } else if (this._power < 700) {
      this._power = Number(this._power) + 100;
    }
  }
  decreasePower = function () {
    if (this._power >= 100 && this._power <= 700 && this._state === false) {
      alert('Turn on the Microwave Oven');
    } else if (this._power > 0) {
      this._power = Number(this._power) - 100;
    }
  };
}
