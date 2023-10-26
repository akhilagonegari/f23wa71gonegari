const express = require('express');
const router = express.Router();

router.get('/computation', (req, res) => {
  const lastDigit = getLastDigitFromId(req.query.id); // Get the last digit from the query parameter 'id'

  // Use the last digit to select a Math function
  let fn;
  switch (lastDigit % 4) {
    case 0:
      fn = 'Math.pow';
      break;
    case 1:
      fn = 'Math.sqrt';
      break;
    case 2:
      fn = 'Math.round';
      break;
    case 3:
      fn = 'Math.floor';
      break;
  }

  const x = req.query.x || Math.random(); // Use the 'x' query parameter if provided, else generate a random value

  // Calculate the result based on the selected function and 'x'
  let result;
  if (fn === 'Math.imul') {
    result = Math.imul(x, 2); // Change the exponent as needed
  } else {
    result = eval(`${fn}(${x})`);
  }

  res.send(`${fn} applied to ${x} is ${result}`);
});

// Function to extract the last digit from the 'id' query parameter
function getLastDigitFromId(id) {
  if (id) {
    const idNumber = parseInt(id, 10);
    if (!isNaN(idNumber)) {
      return Math.abs(idNumber) % 10;
    }
  }
  return 0; // Default to 0 if 'id' is not provided or invalid
}

module.exports = router;
