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

  var максВысота = 150;

  результатИгрока = функция(x, y, width, height, имяИгрока, времяИгрока) {
    цикл перебора максимального числа из times, вернет максВремя;
    имяИгрока === вы ? цвет заливки = rgba(255, 0, 0, 1) : цвет заливки = тоже синий и с рандомными каналами;
    высотаКолонки = (150 * времяИгрока) / максВремя;
    нарисуемПрямоугольник(x, y, WIDTH_COLUMN, высотаКолонки);
    написатьТекст(времяИгрока x, высотаКолонки + 12);
  }

  for (var i = 0, j = 140; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';

    ctx.fillText(names[i], j, 240);
      рисуем результатИгрока(j, 225, width, height)

    j += WIDTH_COLUMN + GAP_BETWEEN_COLUMNS;
  }
};
