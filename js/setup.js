'use strict';

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

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

  var repeatingNumbers = [];

  var fragment = document.createDocumentFragment();

  for (var k = 0; k < amoutOfWizards; k++) {
    wizards.push(
        {
          name: getRandomName(),
          coatColor: getRandomCoatColor(),
          eyesColor: getRandomEyesColor()
        }
    );
  }

  for (var index = 0; index < wizards.length; index++) {
    for (var j = 0; j < wizards.length; j++) {
      if (wizards[index].name === wizards[j].name && index !== 0) {
        repeatingNumbers.push(index);
      }
    }
  }

  for (var i = 0; i < amoutOfWizards; i++) {
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

createWizard(numberOfWizards);

