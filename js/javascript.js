let initModal = function() {
  const writeUsLink = document.querySelector('.block-contacts__link-modal');
  const writeUsPopup = document.querySelector('.modal-write-us');
  const writeUsClose = writeUsPopup.querySelector('.modal-write-us__close');
  const writeUsLogin = writeUsPopup.querySelector('.field__input_login');
  const writeUsEmail = writeUsPopup.querySelector('.field__input_email');
  const writeUSMessage = writeUsPopup.querySelector('.field__input_message');
  const writeUsForm = writeUsPopup.querySelector('.modal-write-us__form');

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
      writeUsLogin.focus();
    }

    else if(storageEmail) {
      writeUsEmail.value = storageEmail;
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
    else if(isStorageSupport) {
        localStorage.setItem('login', writeUsLogin.value);
        localStorage.setItem('email', writeUsEmail.value)
    }
  });

  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27 && writeUsPopup.classList.contains('modal_show')) {
        evt.preventDefault();
        writeUsPopup.classList.remove('modal_show');
        writeUsPopup.classList.remove('modal_error');
    }
  });
}

// let initSlider = function() {
//   const sliderToggle1 = document.querySelector('.slider__toggle_1');
//   const sliderToggle2 = document.querySelector('.slider__toggle_2');
//   const sliderToggle3 = document.querySelector('.slider__toggle_3');
//   const sliderToggleCurrent = document.querySelector('.slider__toggle_current');


//   sliderToggle2.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     if(sliderToggle2.classList.contains('slider__toggle_current')) {
//       evt.
//     }
//   })
// }



// let initMap = function() {весь код связанный с картой}


initModal();
// initMap();
// initSlider();




