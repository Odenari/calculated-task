// constants
window.PIZZA_DEFAULTS = Object.freeze({
  PEOPLE_AMOUNT: 3,
  PIZZA_SLICES: 6,
  AVERAGE_AGE: 25,
  TOPPINGS: 0,
  IS_RAVENOUS: false,
});

const peopleBtns = document.querySelectorAll('button[name="peopleBtn"]');
const sliceBtns = document.querySelectorAll('button[name="sliceBtn"]');
const ageBtns = document.querySelectorAll('button[name="ageBtn"]');

const peopleInput = document.querySelector('input[name="peopleAmount"]');
const slicesInput = document.querySelector('input[name="slicesPerPizza"]');
const ageInput = document.querySelector('input[name="averageAge"]');

peopleBtns.forEach(btn =>
  btn.addEventListener(
    'click',
    evt => (peopleInput.value = evt.currentTarget.value)
  )
);

sliceBtns.forEach(btn =>
  btn.addEventListener(
    'click',
    evt => (slicesInput.value = evt.currentTarget.value)
  )
);

ageBtns.forEach(btn =>
  btn.addEventListener(
    'click',
    evt => (ageInput.value = evt.currentTarget.value)
  )
);

const form = document.querySelector('form');
form.onsubmit = function (evt) {
  evt.preventDefault();
  console.log('TEAM: ' + peopleInput.value);
  console.log('SLICES: ' + slicesInput.value);
  console.log('AGE: ' + ageInput.value);
};

form.onreset = evt => {
  evt.preventDefault();
  const { PEOPLE_AMOUNT, PIZZA_SLICES, AVERAGE_AGE, TOPPINGS, IS_RAVENOUS } =
    window.PIZZA_DEFAULTS;
  peopleInput.value = PEOPLE_AMOUNT;
  slicesInput.value = PIZZA_SLICES;
  ageInput.value = AVERAGE_AGE;
  toppingsInput = TOPPINGS;
  hungerInput = IS_RAVENOUS;
};
