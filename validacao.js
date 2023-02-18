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