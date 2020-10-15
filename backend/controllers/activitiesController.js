const Activity = require('../models/Activity')

const activitiesController = {

    loadActivities: (req, res) => {
        const {titleActivity, imgActivity, itineraryId} = req.body
        console.log(req.body)


        const newActivity = new Activity({
            titleActivity,
            imgActivity,
            itineraryId
        })

        newActivity.save()

        .then(activity => {
            res.json({success: true, activity})
        })
        .catch(error => {
            res.json({success: false, error})
        })

    },

    getActivities: async (req, res) => {

        const activitiesById = await Activity.find({itineraryId: req.params.id})

        res.json({
            success: true,
            activities: activitiesById
        })
    }
}

module.exports = activitiesController