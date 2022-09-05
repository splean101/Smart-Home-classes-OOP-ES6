import { renderMO } from './renderMO.js';
import { renderAir } from './renderAir.js';
import { renderTV } from './renderTV.js';
import {
  createElementWithAttributes,
  changeClasses,
} from '../commonFunctions.js';

export function renderHouse(h) {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.innerHTML = '<h2> Smart Home</h2>';

  const owner = document.createElement('form');

  const ownerLabel = createElementWithAttributes('label', null, 'Owner');

  const ownerInput = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    null,
    h.Owner()
  );
  ownerInput.addEventListener('click', () => (this.value = ''));

  const ownerSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    'Change'
  );
  ownerSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    h.Owner(ownerInput.value);
  });

  owner.appendChild(ownerLabel);
  owner.appendChild(ownerInput);
  owner.appendChild(ownerSubmit);

  const adress = document.createElement('form');

  const adressLabel = createElementWithAttributes('label', null, 'Adress');

  const adressInput = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    null,
    h.Adress()
  );
  adressInput.addEventListener('click', () => (this.value = ''));

  const adressSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    'Change'
  );
  adressSubmit.addEventListener('click', () => h.Adress(adressInput.value));

  adress.appendChild(adressLabel);
  adress.appendChild(adressInput);
  adress.appendChild(adressSubmit);

  const addDevice = document.createElement('form');

  const addDeviceLabel = createElementWithAttributes(
    'label',
    null,
    'Choose Device'
  );

  const addDeviceInput = document.createElement('select');

  const airOption = createElementWithAttributes(
    'option',
    null,
    'Air Conditioner',
    null,
    null,
    'Air Conditioner'
  );

  const tvOption = createElementWithAttributes(
    'option',
    null,
    'TV',
    null,
    null,
    'TV'
  );

  const moOption = createElementWithAttributes(
    'option',
    null,
    'Microwave Owen',
    null,
    null,
    'Microwave Owen'
  );

  const deviceSubmit = createElementWithAttributes(
    'input',
    null,
    null,
    'button',
    null,
    '+ Add Device'
  );
  deviceSubmit.name = 'deviceSubmit';
  deviceSubmit.addEventListener('click', () => {
    let model = prompt('Enter the device`s model', '');
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
  const field = document.getElementsByTagName('fieldset')[0];
  field.appendChild(legend);
  field.appendChild(owner);
  field.appendChild(adress);
  field.appendChild(addDevice);
}
