import React from 'react'
import Activity from './Activity'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import Comments from './Comments'
import itinerActions from '../redux/actions/itinerActions'

class Itineraries extends React.Component {

    state = {
        viewMore: false,
        comentario: []
    }

    componentDidMount() {
        this.props.itinerary.coments.map(comentario => {
            return (
                this.setState({
                    comentario: comentario})
            )
        })
    }


    render() {

        const idItinerary = this.props.idItinerary
        
        const viewMore = e => {
            e.preventDefault()
            this.setState({
                viewMore: !this.state.viewMore
            })
        }

        console.log(this.state.comentario)
        const removeComent = e => {
            e.preventDefault()
            const idRemove = e.target.value
            console.log(this.props.itinerary.coments)
            if (idRemove === this.props.itinerary._id & this.props.itinerary.coments === this.state.comentario) {
                const commentRemove = this.props.itinerary.coments
                this.props.removeComent(commentRemove)
            }
        }

        const like = require('../images/likeYes.jpg')

        return (
            <div className="container" key={this.props.itinerary.profileImg}>
            <div className="card" key={this.props.itinerary.title} style={{border: '1px solid black', minHeight: '30vh', minWidth: '65vw'}}>
                <div className="containerProfile">
                    <div className="profile" style={{backgroundImage: `url(${this.props.profileImage})`}}>
                        <div className="middleDiv">
                            <div className="ProfileName">{this.props.itinerary.profileImg}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{fontSize: '40px'}}>{this.props.itinerary.title}</p>
                    <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                        <p>likes: {this.props.itinerary.likes}</p>
                            <button className='like' value={this.props.itinerary._id} style={{backgroundImage: `url(${like})`}}>
                            </button>
                    </div>
                    <p>Duration: {this.props.itinerary.duration === 1 ? `${this.props.itinerary.duration} Hour` : `${this.props.itinerary.duration} hours`} </p>
                    <p>{
                        this.props.itinerary.price === 1 ? this.props.itinerary.price = "$" :
                        this.props.itinerary.price === 2 ? this.props.itinerary.price = "$$" :
                        this.props.itinerary.price === 3 ? this.props.itinerary.price = "$$$" :
                        this.props.itinerary.price === 4 ? this.props.itinerary.price = "$$$$" :
                        this.props.itinerary.price === 5 ? this.props.itinerary.price = "$$$$$" :
                        this.props.itinerary.price 
                    }</p>
                    <p className="hashtag">{this.props.itinerary.hashtag + " "}</p>
                </div>
                <div>
                    {this.state.viewMore && <Activity idItinerary={this.props.itinerary._id}/>}
                    <Button style={{color: 'black', margin: '0 30vw 3vh 0', maxWidth: '30vw', left: '0.8vw'}} size="lg" block onClick={viewMore}>
                    {this.state.viewMore ? 'View Less' : 'View More'}</Button>

                        {this.props.itinerary.coments.map(comentario => {
                            return (
                                <div style={{display: 'flex'}}>
                                    <p style={{fontSize: '15px'}}>{comentario.name} said:</p>
                                    <p style={{fontSize: '15px'}}>{comentario.coments}</p>
                                </div>
                            ) 
                        })}
                        {this.props.tokenLogin &&
                            <Comments idItinerary={this.props.itinerary._id} />
                        }
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tokenLogin: state.userReducer.token,
        nameLogin: state.userReducer.firstName,
    }
}

const mapDispatchToProps = {
    removeComent: itinerActions.removeComent
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)