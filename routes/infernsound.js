const express     = require('express');
const router      = express.Router();

router.get('/', async function(req, res) {
    console.log(req.session);
    res.render('infernsound');
});

module.exports = router;