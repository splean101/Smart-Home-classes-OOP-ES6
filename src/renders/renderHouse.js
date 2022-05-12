import { renderMO } from './renderMO.js';
import { renderAir } from './renderAir.js';
import { renderTV } from './renderTV.js';
import {
  createElementWithAttributes,
  changeClasses,
} from '../commonFunctions.js';

export function renderHouse(h) {
  var fieldset = document.createElement('fieldset');
  var legend = document.createElement('legend');
  legend.innerHTML = '<h2> Smart Home</h2>';

  var owner = document.createElement('form');

  var ownerLabel = createElementWithAttributes('label', null, 'Owner');

  var ownerInput = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    null,
    h.Owner()
  );
  ownerInput.addEventListener('click', function () {
    this.value = '';
  });

  var ownerSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    'Change'
  );
  ownerSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    h.Owner(ownerInput.value);
  });

  owner.appendChild(ownerLabel);
  owner.appendChild(ownerInput);
  owner.appendChild(ownerSubmit);

  var adress = document.createElement('form');

  var adressLabel = createElementWithAttributes('label', null, 'Adress');

  var adressInput = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    null,
    h.Adress()
  );
  adressInput.addEventListener('click', function () {
    this.value = '';
  });

  var adressSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    'Change'
  );
  adressSubmit.addEventListener('click', function () {
    h.Adress(adressInput.value);
  });

  adress.appendChild(adressLabel);
  adress.appendChild(adressInput);
  adress.appendChild(adressSubmit);

  var addDevice = document.createElement('form');

  var addDeviceLabel = createElementWithAttributes(
    'label',
    null,
    'Choose Device'
  );

  var addDeviceInput = document.createElement('select');

  var airOption = createElementWithAttributes(
    'option',
    null,
    'Air Conditioner',
    null,
    null,
    'Air Conditioner'
  );

  var tvOption = createElementWithAttributes(
    'option',
    null,
    'TV',
    null,
    null,
    'TV'
  );

  var moOption = createElementWithAttributes(
    'option',
    null,
    'Microwave Owen',
    null,
    null,
    'Microwave Owen'
  );

  var deviceSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    '+ Add Device'
  );
  deviceSubmit.name = 'deviceSubmit';
  deviceSubmit.addEventListener('click', function () {
    var model = prompt('Enter the device`s model', '');
    if (model === null) {
      console.log('NO DEVICE');
      return;
    } else if (model === '') {
      model = 'unknown model';
    }
    switch (addDeviceInput.value) {
      case 'Air Conditioner':
        renderAir(model);
        break;
      case 'TV':
        renderTV(model);
        break;
      case 'Microwave Owen':
        renderMO(model);
    }
  });

  addDeviceInput.appendChild(moOption);
  addDeviceInput.appendChild(airOption);
  addDeviceInput.appendChild(tvOption);

  addDevice.appendChild(addDeviceLabel);
  addDevice.appendChild(addDeviceInput);
  addDevice.appendChild(addDeviceInput);
  addDevice.appendChild(deviceSubmit);

  document.getElementById('home').appendChild(fieldset);
  var field = document.getElementsByTagName('fieldset')[0];
  field.appendChild(legend);
  field.appendChild(owner);
  field.appendChild(adress);
  field.appendChild(addDevice);
}
