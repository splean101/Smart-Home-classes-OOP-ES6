import { Device } from './device.js';

export class TV {
  constructor(model) {
    this._volume = 0;
    this._chanel = 1;
    this._source = 'TV';
  }
  changeVolume(option) {
    if (!this._state) {
      alert('Turn the Device ON');
      document.getElementsByName('volume')[0].value = 0;
    } else {
      this._volume = option;
    }
  }
  changeChanel(chanel) {
    if (!this._state) {
      alert('Turn the Device ON');
    } else if (chanel === '+' && this._chanel < 12) {
      this._chanel += 1;
    } else if (chanel === '-' && this._chanel > 1) {
      this._chanel -= 1;
    }
  }
  muteVolume() {
    this._volume = 0;
  }
}
