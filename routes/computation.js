var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    var rand1 = Math.random() * 100;
    var rand2 = Math.random() * 200;

    var num1 = Math.imul(rand1, rand2);
    var num2 = Math.log(rand2);
    var num3 = Math.log10(rand1);

    res.send(`
        The random numbers are ${rand1} and ${rand2}
        <br> Math.imul applied to ${rand1} and ${rand2} is ${num1}
        <br> Math.log applied to ${rand2} is ${num2}
        <br> Math.log10 applied to ${rand1} is ${num3}
    `);
});

module.exports = router;


