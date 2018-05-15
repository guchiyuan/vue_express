var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({ code: "0000" });
  // res.send('大爷啊');
});

router.get('/register',(req,res) => {
  res.send({
    message:`Hello! Your user was registered! Have fun!`
  })
})


module.exports = router;
