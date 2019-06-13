var express = require('express')
var router = express.Router()
const Auth = require('../models/auth')
const bcrypt = require('bcrypt')


router.post('/register', (req, res) => {
    let { login, pass, group } = req.body
    Auth.findOne({ login: login })
        .then((result) => {
            res.json({
                ok: false,

                login: 'Логин ' + result.login + ' занят'
            })
        })
        .catch(() => {
            bcrypt.hash(pass, 10, function (err, hash) {
                if (!hash) {
                    console.log(err)
                }
                else {
                    Auth.create({
                        login: login,
                        password: hash,
                        group: group
                    }).then((user) => {
                        // req.session.userId = user.id
                        // req.session.userLogin = user.login
                        // req.session.userGroup = user.group
                        res.json({
                            ok: true,
                            login: 'Пользователь ' + user.login + ' успешно зарегистрирован'
                        })
                    })
                }
            })
        })
})

module.exports = router;