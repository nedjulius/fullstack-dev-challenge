const utils = require('../utils/index');
const constants = require('../constants');

function calculateSavings(req) {
  const { init, rate, divisor, monthly } = utils.parseRequest(req);
  let value = init;
  return Array(constants.PERIOD).fill().map((_, i) => {
    value += monthly;
    if ((i + 1) % divisor == 0) value = value + (value * rate);
    return Object({month: i + 1, amount: Number(value.toFixed(2))});
  });
}

module.exports = calculateSavings;