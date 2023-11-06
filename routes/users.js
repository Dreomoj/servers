const express = require('express')
const router = express.Router()
const User = require('../models/user')

//get all users
router.get('/users', (request, response) => {
    User.find()
    .then((user) => {
        response.json(user)
    })
    .catch((error) => {
        response.json({
            message: error.message
        })
    })
})

router.get('/users/:id', (request, response) => {
    response.json({
        name: "Faruq Okunlola",
        job: "Hotelier",
        email: "fruq@gmail.com",
        password: "fruq501"
    })
})


router.post('/users', (request, response) => {
    const newUser = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password
    })
    newUser.save()
    .then((newUser) => {
        response.json(newUser)
    })
    .catch((error) => {
        response.json({
            message: error.message
        })
    })
})

router.put('/users/:id', (request, response) => {
    response.status(201)
    response.send('user updated successfully')
})

router.delete('/users/:id', (request, response) => {
    response.status(200)
    response.send('user deleted successfully')
})

module.exports = router