const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
window.addEventListener('load', setFormText);

form.addEventListener('input', throttle(saveFormText, 500));
form.addEventListener('submit', handleSubmit);

function saveFormText(event) {
  try {
    let formData = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
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

  console.log(formData);

  event.currentTarget.reset();
}
