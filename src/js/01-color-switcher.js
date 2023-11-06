const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.buttonStart.addEventListener('click', onStartHendler);
refs.buttonStart.addEventListener('click', onStopHendler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
