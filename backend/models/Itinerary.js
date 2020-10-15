const mongoose = require('mongoose')

const itinerSchema = new mongoose.Schema({
    hashtag: { type: Array},
    title: { type: String},
    profileImg: { type: String, default: 'iconoNuevoUsuario'},
    likes: { type: Number},
    duration: { type: Number},
    price: { type: Number},
    coments: { type: Array},
    cityId: { type: mongoose.Schema.ObjectId, ref:'city'} 
})

const Itinerary = mongoose.model('itinerary', itinerSchema)

module.exports = Itinerary