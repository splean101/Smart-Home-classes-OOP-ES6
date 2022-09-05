import { myHouse } from '../home.js';
import { MicrowaveOven } from '../microwave.js';
import {
  createElementWithAttributes,
  changeClasses,
} from '../commonFunctions.js';

export function renderMO(model) {
  const mo = new MicrowaveOven(model);
  myHouse.addMO(mo);

  const moDiv = createElementWithAttributes('div', 'mo');

  const label1 = createElementWithAttributes('label', null, 'Model');

  model = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    'unknown device',
    mo.Model()
  );
  model.addEventListener('change', () => mo.Model(model.value));

  const state = createElementWithAttributes('span', 'value', mo.getState());

  const onBtn = createElementWithAttributes('button', null, 'ON', 'button');
  onBtn.addEventListener('click', () => {
    mo.on();
    changeClasses(state, 'off', 'on');
    return (state.textContent = mo.getState());
  });

  const offBtn = createElementWithAttributes('button', null, 'OFF', 'button');
  offBtn.addEventListener('click', () => {
    mo.off();
    changeClasses(state, 'on', 'off');
    return (state.textContent = mo.getState());
  });

  const p = createElementWithAttributes('span', 'label', 'Power: ');

  const power = createElementWithAttributes('span', 'value', mo._power);

  const increasePower = createElementWithAttributes(
    'button',
    null,
    '+',
    'button'
  );
  increasePower.addEventListener('click', () => {
    mo.increasePower();
    return (power.textContent = mo._power);
  });

  const decreasePower = createElementWithAttributes(
    'button',
    null,
    '-',
    'button'
  );
  decreasePower.addEventListener('click', () => {
    mo.decreasePower();
    return (power.textContent = mo._power);
  });

  const delButton = createElementWithAttributes(
    'button',
    'del',
    'Delete',
    'button'
  );
  delButton.addEventListener('click', () => document.body.removeChild(moDiv));

  const br1 = document.createElement('br');
  const br2 = document.createElement('br');

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
