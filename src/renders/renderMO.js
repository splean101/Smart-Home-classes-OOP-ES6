import { myHouse } from '../home.js';
import { MicrowaveOven } from '../microwave.js';
import {
  createElementWithAttributes,
  changeClasses,
} from '../commonFunctions.js';

export function renderMO(model) {
  var mo = new MicrowaveOven(model);
  myHouse.addMO(mo);

  var moDiv = createElementWithAttributes('div', 'mo');

  var label1 = createElementWithAttributes('label', null, 'Model');

  var model = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    'unknown device',
    mo.Model()
  );
  model.addEventListener('change', function () {
    mo.Model(model.value);
  });

  var state = createElementWithAttributes('span', 'value', mo.getState());

  var onBtn = createElementWithAttributes('button', null, 'ON', 'button');
  onBtn.addEventListener('click', function () {
    mo.on();
    changeClasses(state, 'off', 'on');
    return (state.textContent = mo.getState());
  });

  var offBtn = createElementWithAttributes('button', null, 'OFF', 'button');
  offBtn.addEventListener('click', function () {
    mo.off();
    changeClasses(state, 'on', 'off');
    return (state.textContent = mo.getState());
  });

  var p = createElementWithAttributes('span', 'label', 'Power: ');
  
  var power = createElementWithAttributes('span', 'value', mo._power);
  console.log(`mo power ${mo._power}`);

  var increasePower = createElementWithAttributes('button', null, '+', 'button');
   increasePower.addEventListener('click', function () {
    mo.increasePower();
    return (power.textContent = mo._power);
  });

  var decreasePower = createElementWithAttributes('button', null, '-', 'button');
   decreasePower.addEventListener('click', function () {
    mo.decreasePower();
    return (power.textContent = mo._power);
  });

  var delButton = createElementWithAttributes(
    'button',
    'del',
    'Delete',
    'button'
  );
  delButton.addEventListener('click', function () {
    document.body.removeChild(moDiv);
  });

  var br1 = document.createElement('br');
  var br2 = document.createElement('br');

  moDiv.appendChild(label1);
  moDiv.appendChild(model);
  moDiv.appendChild(state);
  moDiv.appendChild(onBtn);
  moDiv.appendChild(offBtn);
  moDiv.appendChild(br1);
  moDiv.appendChild(p);
  moDiv.appendChild(power);
  moDiv.appendChild(br2);
  moDiv.appendChild(decreasePower);
  moDiv.appendChild(increasePower);
  moDiv.appendChild(delButton);
  document.querySelector('script').insertAdjacentElement('beforebegin', moDiv);
}
