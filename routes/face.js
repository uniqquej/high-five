const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    let a = 'test data'
    res.render('face',{result:a});
})

module.exports = router;