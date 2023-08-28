const express = require('express');
const PatternModel   = require('../models/sleep_pattern')

const router = express.Router();
const auth        = require('./auth');

router.get('/',auth.CheckAuth, function(req,res){
    res.render('video', {user: req.user})
})

router.post('/', async function(req,res){
    const user_id = req.body.user_id
    const count = req.body.count;
    
    console.log(user_id, count);

        var pattern = {
            user_id: user_id,
            count: count,
        };
        const result = await PatternModel.AddPattern(pattern);
        if (result.error) {
            console.log(result.error);
            res.status(400).send('error')
        }
        else {
            console.log('ADD PATTERN');
        }
        res.status(200).send('ok')

})

module.exports = router;