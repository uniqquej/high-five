const express = require('express');
const PatternModel   = require('../models/sleep_pattern')
const UserModel   = require('../models/user')

const router = express.Router();
const auth        = require('./auth');

router.get('/',auth.CheckAuth, async function(req,res){
    const result = await UserModel.GetRing(req.user.id);
    res.render('video', {user: req.user, ring:result.result})
})

router.post('/', async function(req,res){
    const user_id = req.body.user_id
    
    console.log('user', user_id);

        var pattern = {
            user_id: user_id
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