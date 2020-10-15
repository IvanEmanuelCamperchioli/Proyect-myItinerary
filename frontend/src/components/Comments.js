import React, { useState } from 'react'
import { connect } from 'react-redux'
import itinerActions from '../redux/actions/itinerActions'

const Comments = props => {

    const name = props.nameLogin
    console.log(name)

    const [newComments, setNewComments] = useState({
        name, 
        coments: '',
    })

    const[button, setbutton] = useState(true)

    const readInput = e => {
        if (e.target.value === "") {
            alert('write something more to comment')
            setbutton(true)
            setNewComments({coments: ''})
        } else {
            const value = e.target.value
            setbutton(false)
            setNewComments({
                ...newComments,
                coments: value
            }) 
        } 
    }

    const idItinerary = props.idItinerary

    const sendComment = async e => {
        e.preventDefault()
        await props.loadComments(newComments, idItinerary)
        await setNewComments({coments: ''})
        setbutton(true)
    }

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <textarea style={{width: '50vw', marginBottom: '10px', textAlign: 'center'}} onChange={readInput} value={newComments.coments} name='coments'></textarea>
                <button style={{padding: '5px', borderRadius: '5px', marginLeft: '5px'}} disabled={props.tokenLogin && button} onClick={sendComment}>send</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        nameLogin: state.userReducer.firstName,
        tokenLogin: state.userReducer.token
    }
}

const mapDispatchToProps = {
    loadComments: itinerActions.loadComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)