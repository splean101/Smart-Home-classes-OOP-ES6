import { myHouse } from '../home.js';
import { AirConditioner } from '../airCond.js';
import {
  createElementWithAttributes,
  changeClasses,
} from '../commonFunctions.js';

export function renderAir(model) {
  const ac = new AirConditioner(model);
  myHouse.addConditioner(ac);

  const acDiv = createElementWithAttributes('div', 'ac');

  const label1 = createElementWithAttributes('label', null, 'Model');

  model = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    'unknown device',
    ac.Model()
  );
  model.addEventListener('change', function () {
    ac.Model(model.value);
  });

  const state = createElementWithAttributes('span', 'value', ac.getState());

  const onBtn = createElementWithAttributes('button', null, 'ON', 'button');
  onBtn.addEventListener('click', function () {
    ac.on();
    changeClasses(state, 'off', 'on');
    state.textContent = ac.getState();
  });
  const offBtn = createElementWithAttributes('button', null, 'OFF', 'button');
  offBtn.addEventListener('click', function () {
    ac.off();
    changeClasses(state, 'on', 'off');
    return (state.textContent = ac.getState());
  });

  const t = createElementWithAttributes('span', 'label', 'Temp:  ');

  const temp = createElementWithAttributes('span', 'value', ac._temp);

  const increaseTemp = createElementWithAttributes('button', null, '+', 'button');
  increaseTemp.addEventListener('click', function () {
    ac.changeTemp('+');
    return (temp.textContent = ac._temp);
  });

  const decreaseTemp = createElementWithAttributes('button', null, '-', 'button');
  decreaseTemp.addEventListener('click', function () {
    ac.changeTemp('-');
    return (temp.textContent = ac._temp);
  });

  const delButton = createElementWithAttributes(
    'button',
    'del',
    'Delete',
    'button'
  );
  delButton.addEventListener('click', function () {
    document.body.removeChild(acDiv);
  });

  const br1 = document.createElement('br');
  const br2 = document.createElement('br');

  acDiv.appendChild(label1);
  acDiv.appendChild(model);
  acDiv.appendChild(state);
  acDiv.appendChild(onBtn);
  acDiv.appendChild(offBtn);
  acDiv.appendChild(br1);
  acDiv.appendChild(t);
  acDiv.appendChild(temp);
  acDiv.appendChild(br2);
  acDiv.appendChild(decreaseTemp);
  acDiv.appendChild(increaseTemp);
  acDiv.appendChild(delButton);
  document.querySelector('script').insertAdjacentElement('beforebegin', acDiv);
}
