const initialState = {
    imgItineraries: [],
    itineraries: [],
}

const itinerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
            }
        case 'GET_CITIES':
            return {
                ...state,
                imgItineraries: action.payload
            }
        default:
            return state
    }
}

export default itinerReducer
