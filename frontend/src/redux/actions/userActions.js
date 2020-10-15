import axios from 'axios'
const route = require('../../assets/Route')

const userAction = {
    createAccount: newUser => {
        return async (dispatch, getState) => {
            const response = await axios.post(`${route.localRoute}/api/user`, newUser)
            if (!response.data.success) {
                alert(response.data.error)
            } else {
                dispatch({
                    type: 'LOG_USER',   
                    payload: {  token: response.data.token,
                                firstName: response.data.firstName,
                                urlPick: response.data.urlPick
                    }
                })    
            }
        }
    },

    userLogIn: user => {
        return async (dispatch, getState) => {
            const response = await axios.post(`${route.localRoute}/api/login`, user)
            if (!response.data.success) {
                alert(response.data.error)
            } else {
                dispatch({
                    type: 'LOG_USER',
                    payload: {  token: response.data.token, 
                                firstName: response.data.firstName,
                                urlPick: response.data.urlPick
                    }
                })
            }
        }
    },

    unlog: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'UNLOG_USER'
            })
        }
    },

    localStorageLogin: tokenLS => {
        return async (dispatch, getState) => {
            const response = await axios.get(`${route.localRoute}/api/tokenLS`, {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            if (response.data.success) {
                dispatch({
                    type: 'LOG_USER',
                    payload: {  firstName: response.data.firstName,
                                urlPick: response.data.urlPick,
                                token: tokenLS
                    }
                })
            }
        }
    }
}

export default userAction