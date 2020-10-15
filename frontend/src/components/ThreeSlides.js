import React from 'react'


class ThreeSlides extends React.Component {

    render() {

        return (
            this.props.data.src.map(city => {
                const ciudad = require(`../images/${city}.jpg`)
                return (
                    <>  
                        <div className="display" style={{backgroundImage: `url(${ciudad})`}}>
                            <p key={city} className="titulo">{city}</p>
                        </div>
                    </>
                )
            })
        )
    }
}

export default ThreeSlides
