const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.buttonStart.addEventListener('click', onStartHendler);
refs.buttonStop.addEventListener('click', onStopHendler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartHendler() {
  intervalId = setInterval(onBodyColorChange, 1000);
  refs.buttonStart.disabled = true;
  refs.buttonStop.disabled = false;
}
function onStopHendler() {
  clearInterval(intervalId);
  refs.buttonStart.disabled = false;
  refs.buttonStop.disabled = true;
}
function onBodyColorChange() {
  refs.body.style.background = getRandomHexColor();
}
