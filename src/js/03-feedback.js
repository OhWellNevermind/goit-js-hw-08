const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
window.addEventListener('load', setFormText);

form.addEventListener('input', throttle(saveFormText, 500));
form.addEventListener('submit', handleSubmit);

function saveFormText(event) {
  try {
    const {
      elements: { email, message },
    } = event.currentTarget;

    let formData = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

    console.log(localStorage.getItem('feedback-form-state'));
  } catch (error) {
    return;
  }
}

function setFormText() {
  const {
    elements: { email, message },
  } = form;
  if (localStorage.getItem('feedback-form-state')) {
    console.log(form.elements);

    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = formData.email;
    message.value = formData.message;
  } else {
    email.value = '';
    message.value = '';
  }
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: email.value,
    message: message.value,
  };

  event.currentTarget.reset();
}
