const express     = require('express');
const router      = express.Router();

router.get('/', function(req, res) {
    console.log(req.session);
    res.render('sound');
});

module.exports = router;