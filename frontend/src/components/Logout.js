import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import userAction from '../redux/actions/userActions'

const Logout = props => {

    useEffect(() => {
        props.unlog()
        props.history.push('/home')
    }, [])

    return (
        <>
        </>
    )
}

const mapDispatchToProps = {
    unlog: userAction.unlog
}

export default connect(null, mapDispatchToProps)(Logout)