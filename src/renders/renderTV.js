import {
  changeClasses,
  createElementWithAttributes,
} from '../commonFunctions.js';
import { myHouse } from '../home.js';
import { TV } from '../tv.js';
export function renderTV(model) {
  const tv = new TV(model);
  myHouse.addTV(tv);

  const tvDiv = createElementWithAttributes('div', 'tv');

  const label1 = createElementWithAttributes('label', null, 'Model');

  const model = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    'unknown device',
    tv.Model()
  );
  model.addEventListener('change', function () {
    tv.Model(model.value);
  });

  const state = createElementWithAttributes('span', 'value', tv.getState());

  const onBtn = createElementWithAttributes('button', null, 'ON', 'button');
  onBtn.addEventListener('click', function () {
    tv.on();
    changeClasses(state, 'off', 'on');
    return (state.textContent = tv.getState());
  });
  const offBtn = document.createElement('button');
  offBtn.type = 'button';
  offBtn.textContent = 'OFF';
  offBtn.addEventListener('click', function () {
    tv.off();
    changeClasses(state, 'on', 'off');
    return (state.textContent = tv.getState());
  });

  const volume = createElementWithAttributes('label', null, 'Volume ');
  volume.setAttribute('for', 'volume');
  const range = createElementWithAttributes('input', null, null, 'range');
  range.name = 'volume';
  range.value = 0;
  range.step = 5;
  const volumeValue = createElementWithAttributes('span', null, '0');
  range.addEventListener('input', function () {
    const vol = range.value;
    tv.changeVolume(vol);
    volumeValue.textContent = tv._volume;
  });

  const muteButton = createElementWithAttributes('button', null, 'Mute');
  muteButton.addEventListener('click', function () {
    tv.muteVolume();
    volumeValue.textContent = tv._volume;
    range.value = 0;
  });

  const chanelLabel = createElementWithAttributes('label', null, 'Chanel: ');
  chanelLabel.for = 'chanel';
  const chanel = createElementWithAttributes(
    'input',
    null,
    null,
    'text',
    null,
    tv._chanel
  );
  chanel.name = 'chanel';
  const increaseChanel = createElementWithAttributes(
    'button',
    null,
    '^',
    'button'
  );
  increaseChanel.addEventListener('click', function () {
    tv.changeChanel('+');
    chanel.value = tv._chanel;
  });
  const decreaseChanel = createElementWithAttributes(
    'button',
    null,
    'v',
    'button'
  );
  decreaseChanel.addEventListener('click', function () {
    tv.changeChanel('-');
    chanel.value = tv._chanel;
  });

  const delButton = createElementWithAttributes(
    'button',
    'del',
    'Delete',
    'button'
  );
  delButton.addEventListener('click', function () {
    document.body.removeChild(tvDiv);
  });

  const volumeWrapper = document.createElement('div');
  volumeWrapper.classList.add('half-left');
  volumeWrapper.appendChild(volume);
  volumeWrapper.appendChild(volumeValue);
  volumeWrapper.appendChild(range);
  volumeWrapper.appendChild(muteButton);

  const chanelWrapper = document.createElement('div');
  chanelWrapper.classList.add('half-left');
  chanelWrapper.appendChild(chanelLabel);
  chanelWrapper.appendChild(chanel);
  chanelWrapper.appendChild(increaseChanel);
  chanelWrapper.appendChild(decreaseChanel);

  const br1 = document.createElement('br');
  const br2 = document.createElement('br');

  tvDiv.appendChild(label1);
  tvDiv.appendChild(model);
  tvDiv.appendChild(state);
  tvDiv.appendChild(onBtn);
  tvDiv.appendChild(offBtn);
  tvDiv.appendChild(br1);
  tvDiv.appendChild(volumeWrapper);
  tvDiv.appendChild(chanelWrapper);
  tvDiv.appendChild(br2);
  tvDiv.appendChild(delButton);
  document.querySelector('script').insertAdjacentElement('beforebegin', tvDiv);
}
