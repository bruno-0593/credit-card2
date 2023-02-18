// Enter card details
const incardName = document.querySelector('#card-name');
const outcardName = document.querySelector('.p-cardName');
const inCardNumber = document.querySelector('#cardNumber');
const outCardNumber = document.querySelector('.p-cardnumber');
const inCvc = document.querySelector('#card-cvc');
const outCvc = document.querySelector('.card-cvc');
const inMonth = document.querySelector('#input-month');
const outMonth = document.querySelector('#date-month');
const inYear = document.querySelector('#input-year');
const outYear = document.querySelector('#date-year')

function updateValue(input, output) {
  output.textContent = input.value;
}

incardName.addEventListener('input', () => updateValue(incardName, outcardName));
inCardNumber.addEventListener('input', () => updateValue(inCardNumber, outCardNumber));
inCvc.addEventListener('input', () => updateValue(inCvc, outCvc));
inMonth.addEventListener('input', () => updateValue(inMonth, outMonth));
inYear.addEventListener('input', () => updateValue(inYear, outYear));

// Rule so that you can only add numbers to certain entries
const numberInput = document.querySelector('#cardNumber');
const monthInput = document.querySelector('#input-month');
const yearInput = document.querySelector('#input-year');
const cvcInput = document.querySelector('#card-cvc');

function validateInput(event) {
  const key = event.keyCode || event.which;
  const keyValue = String.fromCharCode(key);
  if(!/^[0-9]+$/.test(keyValue)) {
    event.preventDefault();
  }
}

numberInput.addEventListener('keypress', validateInput);
monthInput.addEventListener('keypress', validateInput);
yearInput.addEventListener('keypress', validateInput);
cvcInput.addEventListener('keypress', validateInput);

// Card number rule
const cardNumberInput = document.querySelector('#cardNumber');

cardNumberInput.addEventListener('input', function() {
  let input = this.value.replace(/\s/g, '');
  if (input.length > 16) {
    input = input.slice(0, 15);
  }
  this.value = input.replace(/(\d{4})/g, '$1 ').trim();
});

// Rule that validates only letters in the cardName input
const nameInput = document.querySelector('#card-name');

function validateName(event) {
  const key = event.keyCode || event.which;
  const keyValue = String.fromCharCode(key);
  if(!/^[a-zA-Z\s]+$/.test(keyValue)) {
    event.preventDefault();
  }
}

nameInput.addEventListener('keypress', validateName);

// Sucess Message Rule
const form = document.querySelector('#form');
const message = document.querySelector('#sucess-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.style.display = 'none';
  mensagem.style.display = 'block';
})

// Error validate
function validateForm() {
  let nameValidate = document.querySelector('#card-name').value;
  let numberValidate = document.querySelector('#cardNumber').value;
  let monthValidate = document.querySelector('#input-month').value;
  let yearValidate = document.querySelector('#input-year').value;
  let cvcValidate = document.querySelector('#card-cvc').value;
  let error = false;

  if (nameValidate == "") {
    document.querySelector('#card-name').style.borderColor = 'red';
    document.querySelector('#card-name').nextElementSibling.innerHTML = 'Please fill in this field';
    error = true;
  } else {
    document.querySelector('#card-name').style.borderColor = "";
    document.querySelector('#card-name').nextElementSibling.innerHTML = "";
  }

  if (numberValidate == "") {
    document.querySelector('#cardNumber').style.borderColor = 'red';
    document.querySelector('#cardNumber').nextElementSibling.innerHTML = 'Please fill in this field';
    error = true;
  } else {
    document.querySelector('#cardNumber').style.borderColor = "";
    document.querySelector('#cardNumber').nextElementSibling.innerHTML = "";
  }

  if (monthValidate == "") {
    document.querySelector('#input-month').style.borderColor = 'red';
    document.querySelector('#input-month').nextElementSibling.innerHTML = 'Please fill in this field';
    error = true;
  } else {
    document.querySelector('#input-month').style.borderColor = "";
    document.querySelector('#input-month').nextElementSibling.innerHTML = "";
  }

  if (yearValidate == "") {
    document.querySelector('#input-year').style.borderColor = 'red';
    document.querySelector('#input-year').nextElementSibling.innerHTML = 'Please fill in this field';
    error = true;
  } else {
    document.querySelector('#input-year').style.borderColor = "";
    document.querySelector('#input-year').nextElementSibling.innerHTML = "";
  }

  if (cvcValidate == "") {
    document.querySelector('#card-cvc').style.borderColor = 'red';
    document.querySelector('#card-cvc').nextElementSibling.innerHTML = 'Please fill in this field';
    error = true;
  } else {
    document.querySelector('#card-cvc').style.borderColor = "";
    document.querySelector('#card-cvc').nextElementSibling.innerHTML = "";
  }

  return !error;
  
}