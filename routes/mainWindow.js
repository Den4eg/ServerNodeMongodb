var express = require('express')
var router = express.Router()

const dbMain = require('../models/dbMain')


dbMain.find({}).then((allFind) => {
    tempList = allFind
})


let tempList


console.log(tempList)



router.get('/', (req, res) => {
    const id = req.session.userId
    const login = req.session.userLogin
    const group = req.session.userGroup
    // console.log('id: ' + id + ' | login: ' + login + ' | group: ' + group)
    res.render('index', { user: { id: id, login: login, group: group, tempList: tempList } });
});

module.exports = router;