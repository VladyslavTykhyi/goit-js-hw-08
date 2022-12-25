import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const message = form.querySelector('textarea');
const KEY_LOCAL = 'feedback-form-state';

form.addEventListener('submit', onReset);
input.addEventListener('input', throttle(onFillUp, 500));
message.addEventListener('input', throttle(onFillUp, 500));
checkInput();

function onFillUp() {
  localStorage.setItem(
    KEY_LOCAL,
    JSON.stringify({ name: input.value, message: message.value })
  );
}

function checkInput() {
  const savedInputValues = JSON.parse(localStorage.getItem(KEY_LOCAL));
  if (savedInputValues) {
    input.value = savedInputValues.name;
    message.value = savedInputValues.message;
  }
}

function onReset(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_LOCAL)));
  e.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL);
}
