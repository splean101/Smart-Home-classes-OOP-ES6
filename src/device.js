export class Device {
  constructor(model) {
    this._model = model;
    this._state = false;
  }
  Model(model) {
    if (!model) {
      return this._model;
    } else {
      this._model = model;
    }
  }
  getState() {
    return this._state ? 'ON' : 'OFF';
  }
  setState(state) {
    this._state = state;
  }
  on() {
    return (this._state = true);
  }
  off() {
    return (this._state = false);
  }
}
