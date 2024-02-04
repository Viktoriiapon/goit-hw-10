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
  const chooseState = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    const delay = userInput; 
    setTimeout(() => {
      if (!userInput) {
        reject('No delay selected');
      } else {
        resolve(userInput);
      }
    }, delay); 

    form.reset(); 
  });

  promise.then(delay => {
    if (chooseState === 'fulfilled') {
      iziToast.show({ title: `✅ Fulfilled promise in ${delay}ms` });
    } else if (chooseState === 'rejected') {
      iziToast.show({ title: `❌ Rejected promise in ${delay}ms` });
    }
  }).catch(error => {
    iziToast.error({ title: error });
  });
}