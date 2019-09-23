'use strict';

var setup = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');

var setupClose = document.querySelector('.setup-close');

var onEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
}

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var onSetupOpenClick = function () {
  openPopup();
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

var onSetupCloseClick = function () {
  closePopup();
};

setupOpen.addEventListener('click', onSetupOpenClick);
setupClose.addEventListener('click', onSetupCloseClick);

var numberOfWizards = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Лапита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomName = function () {
  return names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];
};

var getRandomCoatColor = function () {
  return coatColors[Math.floor(Math.random() * coatColors.length)];
};

var getRandomEyesColor = function () {
  return eyesColors[Math.floor(Math.random() * eyesColors.length)];
};

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


