const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
const User = require('./User')
module.exports = router

//Creates a new user
router.post('/', function (res, req) {
    User.create({
        name: req.body.name,
        password: req.body.password
    },
    function (err, user) {
        if (err) return res.statusCode(500).send('There was a problem adding  the information to the database')
        res.statusCode(200).send(user)
    })
})

//Return all the user  in the database
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return  res.status(500).send('There was a problem finding the users')
        res.status(200).send(users)
    })
})

module.exports = router