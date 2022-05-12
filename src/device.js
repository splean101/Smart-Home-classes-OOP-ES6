export function Device(model) {
  this._model = model;
  this._state = false;
}

Device.prototype.Model = function (model) {
  if (!model) {
    return this._model;
  } else {
    this._model = model;
  }
};
Device.prototype.getState = function () {
  return this._state ? "ON" : "OFF";
};
Device.prototype.setState = function (state) {
  this._state = state;
};

Device.prototype.on = function () {
  return (this._state = true);
};
Device.prototype.off = function () {
  return (this._state = false);
};
