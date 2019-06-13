var express = require('express')
var router = express.Router()
const Auth = require('../models/auth')
const bcrypt = require('bcrypt')

router.post('/login', (req, res) => {
    let { login, pass } = req.body
    Auth.findOne({
        login: login
    }).then((user) => {
        bcrypt.compare(pass, user.password, function (err, hash) {
            if (err) {
                console.log(err);
            }
            if (!hash) {
                console.log('Password incorrect')
                res.json({ ok: false })

            }
            else {
                req.session.userId = user.id
                req.session.userLogin = user.login
                req.session.userGroup = user.group
                console.log('id: ' + user.id + ' | login: ' + user.login + ' | group: ' + user.group)
                res.json({
                    ok: true,
                    username: login
                })
            }
        })
    })
        .catch((err) => {
            console.log(err.name)
            res.json({ ok: false })
        })
})


router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    } else {
        res.redirect('/')
    }
})
module.exports = router;