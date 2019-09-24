'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');

var mainWizard = {
  coat: document.querySelector('.setup-wizard .wizard-coat'),
  eyes: document.querySelector('.setup-wizard .wizard-eyes'),
  fireball: document.querySelector('.setup-fireball-wrap')
};

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.nodeName !== 'INPUT' && evt.target.nodeName !== 'BUTTON') {
    closePopup();
  } else {
    evt.stopPropagation();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

mainWizard.coat.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomCoatColor();
});

mainWizard.eyes.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomEyesColor();
});

mainWizard.fireball.addEventListener('click', function (evt) {
  evt.target.style.backgroundColor = getRandomFireballColor();
});

var numberOfWizards = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Лапита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomName = function () {
  return names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];
};

var getRandomCoatColor = function () {
  return coatColors[Math.floor(Math.random() * coatColors.length)];
};

var getRandomEyesColor = function () {
  return eyesColors[Math.floor(Math.random() * eyesColors.length)];
};

var getRandomFireballColor = function () {
  return fireballColors[Math.floor(Math.random() * fireballColors.length)];
}

var wizards = [];

var similarWizardList = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (amoutOfWizards) {

  var fragment = document.createDocumentFragment();
  var initialLengthWizards = wizards.length;
  for (var i = initialLengthWizards === 0 ? 0 : initialLengthWizards - 1; i < amoutOfWizards + initialLengthWizards; i++) {
    wizards.push(
        {
          name: getRandomName(),
          coatColor: getRandomCoatColor(),
          eyesColor: getRandomEyesColor()
        }
    );
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    fragment.appendChild(wizardElement);

  }

  similarWizardList.appendChild(fragment);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

};


