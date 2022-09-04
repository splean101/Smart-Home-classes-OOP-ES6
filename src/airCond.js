import { Device } from './device.js';

export class AirConditioner extends Device {
  constructor(model) {
    super(model);
    this._temp = 20;
  }
  changeTemp(option) {
    if (this._state === false) {
      alert('Turn the Air Conditioner ON');
    } else if (option === '+' && this._temp < 28) {
      ++this._temp;
    } else if (option === '-' && this._temp > 15) {
      --this._temp;
    }
  }
}

