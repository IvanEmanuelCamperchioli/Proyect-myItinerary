import React from 'react'
import { connect } from 'react-redux'
import itinerActions from '../redux/actions/itinerActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class ViewComment extends React.Component {

    state = {
        comentario: [],
        idItinerary: '',
        show: false
    }

    componentDidMount() {
        const idItinerary = this.props.idItinerary
        const comentario = this.props.comentario
        this.setState({ comentario,  idItinerary})
    }

    showTrash = () => {
        this.setState({ show: true })
    }

    noTrash = () => {
        if(this.state.show){
            this.setState({ show: false })
        }
    }

    removeComent = e => {
        e.preventDefault()
        const commentRemove = this.state.comentario
        this.props.removeComent(commentRemove, this.state.idItinerary)
    }


    render() {

        return (
                <div style={{display: 'flex', flexDirection: 'row', width: '75%', justifyContent: 'space-between'}}>
                    <div onMouseEnter={this.showTrash} onMouseOut={this.noTrash} style={{width: '100%', display: 'flex'}}>  
                        <p style={{fontSize: '15px'}}>{this.state.comentario.name} said:</p>
                        <p onMouseEnter={this.showTrash} style={{fontSize: '15px', }}>{this.state.comentario.coments}</p>
                        <p>{this.state.comentario.date} hs.</p>
                    </div>  
                    {this.props.nameLogin === this.state.comentario.name &&
                        <button onClick={this.removeComent} onMouseEnter={this.showTrash} className="DeleteComent">{this.state.show && <FontAwesomeIcon icon={faTrashAlt} />}</button>
                    } 
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nameLogin: state.userReducer.firstName,
    }
}

const mapDispatchToProps = {
    removeComent: itinerActions.removeComent
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewComment)