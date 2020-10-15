const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    urlPick: {type: String, required: true},
    user: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true}
})
 
const User = mongoose.model('user', userSchema)

module.exports = User