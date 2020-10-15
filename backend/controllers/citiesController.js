const City = require('../models/City')
 
const citiesController = {

    // GET
    ciudades: async (req, res) => {
            const ciudad = await City.find()

            res.json({
                success: true,
                cities: ciudad
            })
    },

    getImgById: async (req, res) => {
            const ImageForitinerary = await City.findOne({_id: req.params.id})

            res.json({
                success: true,
                imgofCity: ImageForitinerary
            })
    },

    // POST
    cargarCiudad: (req, res) => {
        const {name, country, imageURL} = req.body

        const newCity = new City({
            name,
            country,
            imageURL
        })
        newCity.save()
        .then(city => {
            res.json({success: true, 
                      city
            })
        })
        .catch(error => {
            res.json({success: false, 
                      error
            })
        })

    }
}

module.exports = citiesController