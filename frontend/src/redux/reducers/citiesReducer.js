const initialState = {
    cities: [],
    filteredCities: [],
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCITIES':
            return {
                ...state,
                cities: action.payload,
                filteredCities: action.payload
            }
        case 'FILTEREDCITIES':
            const filteredCities = state.cities.filter(city => city.name.toLowerCase().indexOf(action.payload.trim().toLowerCase()) === 0)
            return { 
                ...state, 
                filteredCities 
            }
        default:
            return state
    }
} 

export default citiesReducer