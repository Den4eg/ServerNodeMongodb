const express = require('express')
const router = express.Router()
const Driver = require('../models/transport')
const Journal = require('../models/dbMain')




router.post('/newticket', (req, res) => {
    // console.log(req.body)
    let { transaction, driverName, org, document, avtoNum, avtoMark, trailer } = req.body.form;
    let user = req.session.userLogin
    if (user) {
        Driver.create({
            driver: {
                driverName: driverName,
                documents: document,
                organisation: org
            },
            avto: {
                mark: avtoMark,
                number: avtoNum,
                trailerNumber: trailer
            }
        }).then((result) => {
            Journal.create({

            })


            res.json({
                ok: true,
                result: result.id
            })
        })

    }


})

module.exports = router;