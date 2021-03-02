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
  const sliderControls = document.querySelector('.slider__controls');
  const sliderToggle1 = sliderControls.querySelector('.slider__toggle_1');
  const sliderToggle2 = sliderControls.querySelector('.slider__toggle_2');
  const sliderToggle3 = sliderControls.querySelector('.slider__toggle_3');
  const sliderList = document.querySelector('.slider__list');
  const slide1 = sliderList.querySelector('.slide_1');
  const slide2 = sliderList.querySelector('.slide_2');
  const slide3 = sliderList.querySelector('.slide_3');

  sliderToggle2.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(!sliderToggle2.classList.contains('slider__toggle_current')) {
      sliderToggle2.classList.add('slider__toggle_current');
      sliderToggle1.classList.remove('slider__toggle_current');
      sliderToggle3.classList.remove('slider__toggle_current');
      slide2.classList.add('slider__item_current');
      slide1.classList.remove('slider__item_current');
      slide3.classList.remove('slider__item_current');
    }
  })

  sliderToggle3.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(!sliderToggle3.classList.contains('slider__toggle_current')) {
      sliderToggle3.classList.add('slider__toggle_current');
      sliderToggle1.classList.remove('slider__toggle_current');
      sliderToggle2.classList.remove('slider__toggle_current');
      slide3.classList.add('slider__item_current');
      slide1.classList.remove('slider__item_current');
      slide2.classList.remove('slider__item_current');
    }
  })

  sliderToggle1.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(!sliderToggle1.classList.contains('slider__toggle_current')) {
      sliderToggle1.classList.add('slider__toggle_current');
      sliderToggle2.classList.remove('slider__toggle_current');
      sliderToggle3.classList.remove('slider__toggle_current');
      slide1.classList.add('slider__item_current');
      slide2.classList.remove('slider__item_current');
      slide3.classList.remove('slider__item_current');
    }
  })
};

let initMap = function() {

  let ContactsMap = document.querySelector('.contacts__map');

  let myMap = new ymaps.Map(ContactsMap, {
    center: [59.939121, 30.321611],
    zoom: 17,
    controls: ['zoomControl']
  }, {});

  let myPlacemark = new ymaps.Placemark([59.938685, 30.323005], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-30, -200]
  });

  myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(initMap);
initModal();
initSlider();
