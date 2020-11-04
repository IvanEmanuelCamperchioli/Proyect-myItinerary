import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itinerActions from '../redux/actions/itinerActions'
import { Button } from "reactstrap"

const Comments = props => {

    const name = props.nameLogin

    const [newComments, setNewComments] = useState({
        name, 
        coments: '',
        id: 0,
        date: ''
    })

    const[button, setbutton] = useState(true)

    const readInput = e => {
        if (e.target.value === "") {
            alert('write something more to comment')
            setbutton(true)
            setNewComments({
                coments: ''
            })
        } else {
            const value = e.target.value
            setbutton(false)
            var idRandom = Math.random()*10
            const dateComment = new Date()
            setNewComments({
                ...newComments,
                coments: value,
                id: idRandom,
                date: `${dateComment.getHours()}:${dateComment.getMinutes()}`
            }) 
        } 
    }

    const idItinerary = props.idItinerary

    const sendComment = async e => {
        e.preventDefault()
        await props.loadComments(newComments, idItinerary)
        await setNewComments({coments: '', name})
        setbutton(true)
    }

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <input type="text" style={{width: '50vw', marginBottom: '10px', textAlign: 'center'}} onChange={readInput} value={newComments.coments} name='coments'></input>
                <Button className="buttonComent" disabled={props.tokenLogin && button} onClick={sendComment}>send</Button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        nameLogin: state.userReducer.firstName,
        tokenLogin: state.userReducer.token,
        idUser: state.userReducer.firstName
    }
}

const mapDispatchToProps = {
    loadComments: itinerActions.loadComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)