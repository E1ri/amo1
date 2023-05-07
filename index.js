const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const digitsRegExp = /\D+/g;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      seconds = seconds - 1;
      if (seconds === 0) {
        timerEl.innerText = 'hh:mm:ss';
        clearInterval(interval);
        return;
      }
      timerEl.innerText = new Date(seconds * 1000).toISOString().slice(11, 19)
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  e.preventDefault();
  inputEl.value = e.target.value.replace(digitsRegExp, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
