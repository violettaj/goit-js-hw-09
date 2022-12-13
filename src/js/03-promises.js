const form = document.querySelector(".form");

form.addEventListener("submit", submitEventHandler);

const firstDelay = document.querySelector('input[name="delay"]');
const stepDelay = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function submitEventHandler(event) {
  event.preventDefault();

  const delay = Number.parseInt(firstDelay.value);
  const step = Number.parseInt(stepDelay.value);

  for (let i = 0; i < amount.value; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({ position, delay}) 
  } else {
    reject({ position, delay}) 
  }
},delay);
})
}
