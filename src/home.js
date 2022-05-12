export function Home(name, city) {
    this._owner = name; //prompt('Enter the name', '');
    this._adress = city; //prompt('Enter the city', '');
    this._air = [];
    this._tv = [];
    this._mo = [];
};

Home.prototype.Owner = function (owner) {
    if (!owner) {
        return this._owner;
    } else {
        this._owner = owner;
    }
};

Home.prototype.Adress = function (adress) {
    if (!adress) {
        return this._adress;
    } else {
        this._adress = adress;
    }
};

Home.prototype.addConditioner = function (cond) {
    this._air.push(cond);
};

Home.prototype.addTV = function (tv) {
    this._tv.push(tv);
};

Home.prototype.addMO = function (mo) {
    this._mo.push(mo);
};

export var myHouse = new Home('Owner', 'City');