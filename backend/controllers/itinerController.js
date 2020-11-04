const Itinerary = require('../models/Itinerary')

const itinerController = {

    getItinerariesById: async (req, res) => {
        const itinerairesById = await Itinerary.find({cityId: req.params.id})

        res.json({
            success: true,
            itineraries: itinerairesById
        })
    },

    loadItineraries: (req, res) => {

        const {hashtag, title, profileImg, likes, duration, price, coments, cityId} = req.body

        const newItinerary = new Itinerary({
            hashtag,
            title,
            profileImg,
            likes,
            duration,
            price,
            coments,
            cityId
        })
        newItinerary.save()

        .then(itinerary => {
            res.json({success: true, 
                      itinerary
            })
        })
        .catch(error => {
            res.json({success: false, 
                      error
            })
        })
    },

    putComment: async (req, res) => {
        const comentario = req.body.coments
        const idToComment = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {coments: comentario}}, {new: true})
        const idCiudad = await Itinerary.find({cityId: idToComment.cityId})
        
        res.json({
                success: true,
                comment: idCiudad
            })
    },

    deleteComment: async (req, res) => {
        const {id, toDel} = req.params
        const idToDelete = await Itinerary.findOne({'coments.id': id})
    }
}

module.exports = itinerController


