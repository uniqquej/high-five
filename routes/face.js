const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.render('face')
})
router.get('/video', function(req,res){
    res.render('video')
})

module.exports = router;