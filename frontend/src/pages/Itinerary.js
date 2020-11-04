import React from 'react'
import { Link } from 'react-router-dom'
import Browser from '../components/Browser'
import HeadItineraries from '../components/HeadItineraries'
import Itineraries from '../components/Itineraries'
import { connect } from 'react-redux'
import itinerActions from '../redux/actions/itinerActions'

class Itinerary extends React.Component {
    
    async componentDidMount() {

        const idofCity = this.props.match.params.id

        await this.props.getItineraries(idofCity)
        await this.props.getCities(idofCity)
    }


    render() {

        return ( 
                <>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {this.props.itineraries.length === 0
                    ?   <>
                            {this.props.imgItineraries.map(image => {
                                const imagen = require(`../images/${image.imageURL}`)
                                return (
                                    <div key={image.imageURL} className="imgItineray" style={{backgroundImage: `url(${imagen})`
                                    }}>
                                        <h4 className="titleImgItinerary">{image.name}</h4>
                                    </div>  
                                )
                            })}
                            <div className="noItinerary">
                                <h5 style={{marginTop: '10vh', fontSize: '45px'}}>there are no itineraries loaded yet. Be the first to do it</h5>
                            </div>
                            <a href="#"><img src={require('../images/gps.jpg')} style={{width: '25vw', height: '20vw'}} /></a>
                        </>
                    :   <>                      
                            <HeadItineraries images={this.props.imgItineraries}/>
                            <h4 className="available" style={{textAlign: 'center', fontSize: '30px', margin: '10px'}}><i>Available Itineraries</i></h4>
                            <hr style={{width: '100%'}}/>
                        </>
                    }
                    {this.props.itineraries.map(itinerary => {
                        const profileImage = require(`../images/fotosDePerfil/${itinerary.profileImg}.jpg`)
                        return (
                            <Itineraries itinerary={itinerary} profileImage={profileImage}/>
                        )         
                    })
                    }
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '5vh', marginLeft: '25%', width: '50%', marginBottom: '8vh'}}>
                    <Link to="/cities"><div className="back"></div></Link>
                    <Browser />
                </div>
                </>
        )
    }
}

const mapStateToProps = state => {
    return {
        itineraries: state.itinerReducer.itineraries,
        imgItineraries: state.itinerReducer.imgItineraries
    }
}

const mapDispatchToProps = {
    getItineraries: itinerActions.getItineraries,
    getCities: itinerActions.getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)