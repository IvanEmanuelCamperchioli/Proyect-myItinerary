import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div className="site">
                <img className="logo" src={require('../images/logo.png')} alt="logo" title="logo MYtinerary" />
                <p className="site-p">Find your perfect trip, designed by insiders who know and love their cities</p>
                <div className="browser">
                    <NavLink to="/cities">
                        <img className="explorer" src={process.env.PUBLIC_URL + './rightDirection.png'} alt="next cities page" title="Go to cities page" />
                    </NavLink>
                    <p className="browser-p">Explore this cities...</p>
                </div>
                <p className="itiner">Popular MYtineraries</p>
            </div>
        )
    }
}

export default Header