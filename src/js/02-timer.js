import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};
onBtnStartDisable();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const datePicked = selectedDates[0];
    const currentDate = new Date();
    console.log(selectedDates[0]);

    if (currentDate > datePicked) {
      onBtnStartDisable();
      Notify.warning('Please, choose a date in the future!');
    } else {
      onBtnStartRemoveDisable();
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);

refs.btnStart.addEventListener('click', onBtnClickHendler);
function onBtnClickHendler() {
  onBtnStartDisable();
  Notify.success('Timer started! Enjoy it;)');
  const timerId = setInterval(() => {
    const datePicked = datePicker.selectedDates[0];
    const currentDate = new Date();
    const timeLeft = datePicked - currentDate;
    const timeLeftNow = convertMs(timeLeft);

    refs.days.textContent = addLeadingZero(timeLeftNow.days);
    refs.hours.textContent = addLeadingZero(timeLeftNow.hours);
    refs.minutes.textContent = addLeadingZero(timeLeftNow.minutes);
    refs.seconds.textContent = addLeadingZero(timeLeftNow.seconds);
  }, 1000);
}

function onBtnStartDisable() {
  refs.btnStart.disabled = true;
}
function onBtnStartRemoveDisable() {
  refs.btnStart.disabled = false;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
