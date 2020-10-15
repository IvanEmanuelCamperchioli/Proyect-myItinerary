import axios from 'axios'
const route = require('../../assets/Route')

const itinerActions = {
    getItineraries: idofCity => {
        return async (dispatch, getState) => {
            const response = await axios.get(`${route.localRoute}/api/itineraries/${idofCity}`)
                dispatch({
                    type: 'GET_ITINERARIES',   
                    payload: response.data.itineraries  
                })    
        }
    },

    getCities: idofCity => {
        return async (dispatch, getState) => {
            const response = await axios.get(`${route.localRoute}/api/cities/${idofCity}`)
            dispatch({
                type: 'GET_CITIES',   
                payload: [response.data.imgofCity]  
            })    
        }
    },

    loadComments: (comment, idItinerary) => {
        return async (dispatch, getState) => {
            const response = await axios.put(`${route.localRoute}/api/itineraries/${idItinerary}`, 
            {coments: comment})

            dispatch({
                type: 'GET_ITINERARIES',
                payload: response.data.comment
            })
        }
    },

    removeComent: (commentRemove) => {
        return async (dispatch, getState) => {
            const response = await axios.delete(`${route.localRoute}/api/comments/${commentRemove.map(coment => {return coment.coments})}`)
            console.log(commentRemove.map(coment => {return coment.coments}))
        } 

    }
}

export default itinerActions
