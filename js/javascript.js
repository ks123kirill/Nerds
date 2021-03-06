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
    else {
      writeUsLogin.focus();
    }
    if(storageEmail) {
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
};

let initSlider = function() {
  let sliderBlock = document.querySelector('.slider');
  let sliderToggles = sliderBlock.querySelectorAll('.slider__toggle');
  let sliderItems = sliderBlock.querySelectorAll('.slider__item');
  let currentSlide = 0;

  sliderToggles.forEach(function(sliderToggle, index) {
    sliderToggle.addEventListener('click', function() {
      sliderItems[currentSlide].classList.remove('slider__item_current');
      sliderToggles[currentSlide].classList.remove('slider__toggle_current');

      sliderItems[index].classList.add('slider__item_current');
      sliderToggle.classList.add('slider__toggle_current');

      currentSlide = index;
    })
  })
};

let initMap = function() {

  let ContactsMap = document.querySelector('.contacts__map');

  let myMap = new ymaps.Map(ContactsMap, {
    center: [59.939121, 30.321611],
    zoom: 17,
    controls: ['zoomControl']
  }, {});

  let myPlacemark = new ymaps.Placemark([59.938784, 30.323126], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-50, -190] //При другом позиционировании происходит смещение маркера при масштабировании карты
  });

  myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(initMap);
initModal();
initSlider();
