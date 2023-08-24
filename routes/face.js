const express = require('express');
const router = express.Router();
const auth        = require('./auth');

router.get('/',auth.CheckAuth, function(req,res){
    res.render('face')
})

module.exports = router;