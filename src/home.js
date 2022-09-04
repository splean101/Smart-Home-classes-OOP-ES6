//export
class Home {
  constructor(name, city) {
    this._owner = name; //prompt('Enter the name', '');
    this._adress = city; //prompt('Enter the city', '');
    this._air = [];
    this._tv = [];
    this._mo = [];
  }
  Owner(owner) {
    if (!owner) {
      return this._owner;
    } else {
      this._owner = owner;
    }
  }
  Adress(adress) {
    if (!adress) {
      return this._adress;
    } else {
      this._adress = adress;
    }
  }
  addConditioner(cond) {
    this._air.push(cond);
  }
  addTV(tv) {
    this._tv.push(tv);
  }
  addMO(mo) {
    this._mo.push(mo);
  }
}

export const myHouse = new Home('Owner', 'City');
