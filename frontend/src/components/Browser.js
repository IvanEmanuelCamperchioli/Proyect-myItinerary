import React from 'react'
import { NavLink } from 'react-router-dom'

class Browser extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', minHeight: '10vh', minWidth: '10vw'}}> 
                <NavLink to="/home">
                    <div className="icono-Home" title="back to home page"></div>
                </NavLink>
            </div>

        )
    }
}

export default Browser