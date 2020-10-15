const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    titleActivity: {type: String, required: true},
    imgActivity: {type: String, required: true},
    description: {type: String, required: true},
    itineraryId: {type: mongoose.Schema.ObjectId, ref:'itinerary'}
})

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity