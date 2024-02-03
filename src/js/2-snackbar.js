import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnSubmit = document.querySelector('button');
const form = document.querySelector('.form');
const input = document.querySelector('input[name="delay"]');
const state = document.querySelectorAll('input[name="state"]');

form.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();

  const userInput = input.value;
  console.log(userInput);

  const chooseState = document.querySelector(
    'input[name="state"]:checked'
  ).value;

  const promise = new Promise((resolve, reject) => {
    if (!userInput) {
      reject('No delay selected');
      return;
    }

    resolve(userInput);
    form.reset();
  });

  promise.then(delay => {
    setTimeout(() => {
      if (chooseState === 'fulfilled') {
        iziToast.show({ title: `✅ Fulfilled promise in ${delay}ms` });
      } else if (chooseState === 'rejected') {
        iziToast.show({ title: `❌ Rejected promise in ${delay}ms` });
      }
    }, delay);
  });
}
