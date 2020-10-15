import citiesReducer from "./citiesReducer"
import userReducer from "./userReducer"
import itinerReducer from "./itinerReducer"

const {combineReducers} = require("redux")

const rootReducer = combineReducers({
    citiesReducer,
    userReducer,
    itinerReducer
})

export default rootReducer