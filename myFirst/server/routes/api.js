var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({ code: "0001" });
  // res.send('大爷啊');
});

router.get('/register',(req,res) => {
  console.log('终于等到你');
  
  res.send({
    message:`Have fun!`
  })
})


module.exports = router;
