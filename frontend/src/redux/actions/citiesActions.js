import axios from 'axios'
const route = require('../../assets/Route')

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const response = await axios.get(`${route.localRoute}/api/cities`)
            const citiesOrder = response.data.cities 
            dispatch({
                type: 'GETCITIES',
                payload: citiesOrder  
            })
        }
    },
    filterCities: (filter) => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'FILTEREDCITIES',
                payload: filter
            })
        }
    },
}

export default citiesActions