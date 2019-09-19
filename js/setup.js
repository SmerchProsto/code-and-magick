'use strict';

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var AMOUNT_WIZARDS = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Лапита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomName = function () {
  return names[Math.floor(Math.random() * names.length)];
};

var getRandomSurname = function () {
  return surnames[Math.floor(Math.random() * surnames.length)];
};

var getRandomCoatColor = function () {
  return coatColors[Math.floor(Math.random() * coatColors.length)];
};

var getRandomEyesColor = function () {
  return eyesColors[Math.floor(Math.random() * eyesColors.length)];
};

var wizards = [];

var createWizardData = function (amoutOfWizards) {
  
  for (var i = amoutOfWizards; i >= 0; i--) {
    wizards.push(
        {
          name: getRandomName() + ' ' + getRandomSurname(),
          coatColor: getRandomCoatColor(),
          eyesColor: getRandomEyesColor()
        }
    );
  }
};

createWizardData(AMOUNT_WIZARDS);
