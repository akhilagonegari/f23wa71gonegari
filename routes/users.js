const express = require('express');
const router = express.Router();

let sum = 0;
let more = 0;

router.get('/', (req, res) => {
  more++;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;


