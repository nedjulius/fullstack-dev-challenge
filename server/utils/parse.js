function parseRequest(req) {
  let { init, monthly, rate } = req.params;
  const { frequency } = req.params;
  let divisor = 0;

  switch (frequency) {
    case "monthly":
      divisor = 1;
      break;
    case "quarterly":
      divisor = 3;
      break;
    case "annually":
      divisor = 12;
      break;
  }

  return { 
    divisor, 
    init: parseNumber(init), 
    rate: parseNumber(rate) / 100, 
    monthly: parseNumber(monthly) 
  };
}

// check if number is number and convert; otherwise 0
const parseNumber = (n) => !isNaN(Number(n)) ? Number(n) : 0;

module.exports = parseRequest;