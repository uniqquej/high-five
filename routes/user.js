const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const http = require('http');
const url = require('url');

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


router.get('/:id/ring', auth.CheckAuth, async function(req, res) {
    const userId = req.params.id
    const result = await UserModel.GetRing(userId);
    console.log('result',result.result[0])
	res.render('ring',{result: result, userId:userId});
});
router.put('/:id/ring', async function(req, res) {
    const userId = req.params.id
    const ring = req.body.ring

    console.log('ring',ring)
    const result = await UserModel.UpdateRing(ring,userId);
    if (result.error) {
        console.log(result.error);
        res.redirect(`/user/${userId}/ring`);
    }
    else {
        console.log('RING CHANGED');
        res.status(200).send('ok');
    }
});

router.get('/:id/pattern', auth.CheckAuth,async function(req, res) {
    const result = await PatternModel.GetPattern(req.params.id)
    console.log(result.result[0])
	res.render('pattern',
        {userId: req.params.id,
        result : result.result[0]});
});
router.delete('/:id/pattern', async function(req, res) {
    console.log(typeof req.params.id)
    const result = await PatternModel.DeletePattern(parseInt(req.params.id,10))
    if (result.error) {
        console.log(result.error);
        res.redirect(`/user/${req.params.id}/ring`);
    }
    else {
        console.log('DELETED');
        res.status(204).send('ok')
    }
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