const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const PatternModel   = require('../models/sleep_pattern')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');


router.get('/signin', async function(req, res) {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/user/signin'
}));

router.get('/signup', async function(req, res) { 
    res.render('signup');
});

router.post('/signup', async function(req, res) {
	const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    console.log(id, password, name, email);

    hasher( {password: password } , async function(error, pass, salt, hash) {
        var user = {
            id: id,
            password: hash,
            salt: salt,
            name: name,
            email: email,
        };
        const result = await UserModel.AddUser(user);
        if (result.error) {
            console.log(result.error);
            res.redirect('/user/signup');
        }
        else {
            console.log('USER CREATED');
            res.redirect('/user/signin');
        }
    }); //hasher
});


router.get('/:id/ring', async function(req, res) {
	res.render('ring',{userId: req.params.id});
});

router.get('/:id/pattern', async function(req, res) {
    const result = await PatternModel.GetPattern(req.params.id)
    console.log(result.result[0])
	res.render('pattern',
        {userId: req.params.id,
        result : result.result[0]});
});

router.get('/signout', function(req, res, next) {
	req.logout(function(error) {
        if (error) {
            return next(error);
        }
        res.redirect('/');
    });
});

module.exports = router;