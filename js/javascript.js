const writeUsLink = document.querySelector('.block-contacts__link-modal');
const writeUsPopup = document.querySelector('.modal-write-us');
const writeUsClose = document.querySelector('.modal-write-us__close');
const writeUsLogin = document.querySelector('.field__input_login');
const writeUsEmail = document.querySelector('.field__input_email');
const writeUSMessage = document.querySelector('.field__input_message');
const writeUsForm = document.querySelector('.modal-write-us__form');

let isStorageSupport = true;
let storageLogin = '';
let storageEmail = '';

try {
  storageLogin = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.add('modal_show');
  if(storageLogin) {
    writeUsLogin.value = storageLogin;
    writeUsEmail.focus();
  }
  else {
    writeUsLogin.focus();
  }

  if(storageEmail) {
    writeUsEmail.value = storageEmail;
    writeUSMessage.focus();
  }
  else {
    writeUsEmail.focus();
  }
});

writeUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove('modal_show');
  writeUsPopup.classList.remove('modal_error');
});

writeUsForm.addEventListener('submit', function(evt) {
  if(!writeUsLogin.value || !writeUsEmail.value || !writeUSMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal_error');
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add('modal_error');
  }
  else {
    if(isStorageSupport) {
      localStorage.setItem('login', writeUsLogin.value);
      localStorage.setItem('email', writeUsEmail.value)
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    if(writeUsPopup.classList.contains('modal_show')) {
      evt.preventDefault();
      writeUsPopup.classList.remove('modal_show');
      writeUsPopup.classList.remove('modal_error');
    }
  }
});



