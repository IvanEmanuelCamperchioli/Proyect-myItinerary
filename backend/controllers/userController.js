const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    loadUser: async (req, res) => {
        console.log('principio controlador')
        const {urlPick, user, password, firstName, lastName, email, country} = req.body
        const passHashed = bcryptjs.hashSync(password, 10)
        const userExists = await User.findOne({user})
        if (userExists) {
            res.json({success: false, error: 'the username exists yet'})
        } else {
            const newUser = new User({
                urlPick, user, password: passHashed, firstName, lastName, email, country
            })
            var userSave = await newUser.save()
            // generación de token
            jwt.sign({...newUser}, process.env.SECRETORKEY, {}, (error, token) => {
                if (error) {
                    res.json({success: false, error})
                } else {
                    res.json({
                        success: true,
                        token,
                        firstName: newUser.firstName,
                        urlPick: newUser.urlPick
                    })
                    console.log(token)
                }
            })
            console.log('fin controlador')
        }
    },

    loginUser: async (req, res) => {
        const {user, password} = req.body
        const userExists = await User.findOne({user})
        if (!userExists) {
            res.json({success: false, error: 'Please provide a valid username and password.'})
        } else {
            const passwordMatches = bcryptjs.compareSync(password, userExists.password)
            if (!passwordMatches) {
                res.json({success: false, error: 'Please provide a valid username and password.'})
            } else {
                // generación de token
                jwt.sign({...userExists}, process.env.SECRETORKEY, {}, (error, token) => {
                    if (error) {
                        res.json({success: false, error: 'An error has occurred'})
                    } else {
                        res.json({
                            success: true, 
                            token,
                            firstName: userExists.firstName,
                            urlPick: userExists.urlPick
                        })
                    }
                })
            }
        }
    },

    tokenLSvalidate: (req, res) => {

        const {firstName, urlPick} = req.user

        res.json({ success: true, firstName, urlPick })

    }
}

module.exports = userController