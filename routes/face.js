const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.render('face')
})

module.exports = router;