var express = require('express')
// var adminApp = express()
var router = express.Router()
var config = require('../config')
const Auth = require('../models/auth')
const bcrypt = require('bcrypt')



router.get('/register', function (req, res) {
    res.render('admin')
});

router.post('/register/user', (req, res) => {
    console.log(req.body)
    let login = req.body.login;
    let pass = req.body.pass;
    bcrypt.hash(pass, 10, (err, hash) => {
        if (err) {
            console.log(err)
        }
        pass = hash
    });
    console.log(login)
    console.log(pass)
    Auth.create({
        login: login,
        password: pass
    }).then((data) => {
        res.sendStatus(200)
        console.log(data)
    })
    res.render('admin')
});

module.exports = router;