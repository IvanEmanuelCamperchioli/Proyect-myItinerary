import React, { useEffect, useState } from 'react'
const route = require('../assets/Route')

class Activity extends React.Component {

    state = {
        activities: [],
        activitiesToMap: []
    }

    componentDidMount() {
        const idItinerary = this.props.idItinerary

        fetch(`${route.localRoute}/api/activities/${idItinerary}`)
            .then(response => response.json())
            .then(json =>   this.setState({
                activities: json.activities
            }))
    }    



    render() {

    return (
        <>
        {this.state.activities.map(activity => {
            const imgActivity = require(`../images/activities/${activity.imgActivity}.jpg`)
            return (
                <>
                <hr style={{width: '100%', backgroundColor: "white"}} />
                <div className="activityMain" style={{display: 'flex', margin: '5px'}}>
                    <div className="activity"> 
                            <div style={{backgroundImage: `url(${imgActivity})`}}>
                            </div>
                    </div>
                    <div className="titleActivity">
                        <h4>{activity.titleActivity}</h4>
                        <p style={{background: 'rgba(5,5,5,0.7)', padding: '5px'}}>{activity.description}</p>
                    </div>
                </div>
                </>
            )
        })}
        </>
    )

    }
}

export default Activity