'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 55);

  var WIDTH_COLUMN = 40;
  var GAP_BETWEEN_COLUMNS = 50;

  var MAX_HEIGHT_COLUMN = 150;

  var getMaxTimeOfPlayers = function (arrayTimes) {
    var maxNumber = 0;
    for (var i = 0; i < arrayTimes.length; i++) {
      if (arrayTimes[i] > maxNumber) {
        maxNumber = arrayTimes[i];
      }
    }

    return maxNumber;
  };

  var getRandomColor = function () {
    return 'rgb(255, ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
  };

  var drawResultOfPlayer = function (x, y, width, nameOfPlayer, timeOfPlayer, arrayTimes) {
    var maxTime = getMaxTimeOfPlayers(arrayTimes);

    if (nameOfPlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    var heightOfColumn = (MAX_HEIGHT_COLUMN * timeOfPlayer) / maxTime;

    while (y + heightOfColumn < 270 - 15) {
      y++;
    }

    ctx.fillRect(x, y, width, heightOfColumn);
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(timeOfPlayer), x, y - 12);
  };

  for (var i = 0, j = 140; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';

    ctx.fillText(names[i], j, 270);
    drawResultOfPlayer(j, 90, WIDTH_COLUMN, names[i], times[i], times);

    j += WIDTH_COLUMN + GAP_BETWEEN_COLUMNS;
  }
};
