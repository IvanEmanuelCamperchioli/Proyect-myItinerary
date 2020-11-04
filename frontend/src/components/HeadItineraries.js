import React from 'react'
import { connect } from 'react-redux'

class HeadItineraries extends React.Component {

    render() {

        return (
            this.props.images.map(image => {
                const imagenItinerary = require(`../images/itinerarios/${image.imageURL}`)
                return (
                    <div key={image.imageURL} className="imgItineray" style={{backgroundImage: `url(${imagenItinerary})`
                    }}>
                        <h4 className="titleImgItinerary">{image.name}</h4>
                    </div>    
                )
            })
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         imgItineraries: state.itinerReducer.imgItineraries
//     }
// }

export default HeadItineraries