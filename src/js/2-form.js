let formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

const saveData = localStorage.getItem('feedback-form-state');
if (saveData) {
  formData = JSON.parse(saveData);
  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

formEl.addEventListener('input', handlerInput);
function handlerInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

formEl.addEventListener('submit', handlerClick);
function handlerClick(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (
    elements.email.value.trim() === '' ||
    elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    if (elements.email.value.trim() === '') {
      elements.email.focus();
    } else {
      elements.message.focus();
    }
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  formData.email = '';
  formData.message = '';
  return;
}