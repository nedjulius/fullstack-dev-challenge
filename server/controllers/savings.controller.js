const utils = require('../utils/index');
const constants = require('../constants');

function calculateSavings(req) {
  const { init, rate, divisor, monthly } = utils.parseRequest(req);
  let value = init;
  return Array(constants.PERIOD).fill().map((_, i) => {
    value = i != 0 ? value + monthly : value;
    if ((i + 1) % divisor == 0) value = value + (value * rate);
    return Object({month: i + 1, amount: value.toFixed(2)});
  });
}

module.exports = calculateSavings;