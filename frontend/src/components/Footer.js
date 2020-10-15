import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {

    return (
        <>
        <div className="aerolineas" style={{display: 'flex', justifyContent: 'space-evenly', background: '#EFEFEF', width: '100%', height: '10vh auto', marginTop: '1vh'}}>
            <img style={{height: 'auto', width: '10vw', left: '45%'}} src={require('../images/AmericanAirlines.jpg')} alt="AmericanAirlines" />
            <img style={{height: 'auto', width: '10vw', left: '45%'}} src={require('../images/aerolineas.jpg')} alt="aerolineas argentinas" />
            <img className="british" style={{height: 'auto', width: '15vw', left: '45%'}} src={require('../images/british.png')} alt="British Airlines" />
            <img style={{height: 'auto', width: '10vw', left: '45%'}} src={require('../images/emirates.png')} alt="qatar Airways" />
        </div>
        <div className="footer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '28vh', width: '100%', background: '#000066'}}>
            <img style={{width: '18vw', height: '8vw'}} src={require('../images/logo1.png')} alt="logo" title="logo MYtinerary" />
            <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h5 style={{color: '#ffffff'}}>Access</h5>
                <NavLink to="/home" style={{textDecoration: 'none'}}>
                    <p className="datosFooter">Home Page</p>
                </NavLink>
                <NavLink to="/cities" style={{textDecoration: 'none'}}>
                    <p className="datosFooter">Cities</p>
                </NavLink>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h5 style={{color: '#ffffff'}}>Contact</h5>
                <ul style={{listStyle: 'none'}}>
                    <li className="datosFooter" style={{color: '#ff0000'}}><b>Address:</b> NW 36th St - FL (ZIP33152)</li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    <li className="datosFooter" style={{color: '#ff0000'}}><b>telephone:</b> (305 - 786) 555-3517</li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    <li className="datosFooter" style={{color: '#ff0000'}}><b>Email</b><a href="mailto:mytineraries@contact.com.ar"> mytineraries@contact.com.ar</a> </li>
                </ul>
            </div>
        </div>
        <div style={{background: '#ff0033', height: 'auto', width: '100%'}}>
            <p className="letraChica" style={{textAlign: 'center', fontFamily: '"roboto", sans-serif', fontWeight: '300', color: '#ffffff', fontSize: '85%'}}>All rights reserved. Content provided with permission</p>
            <p className="letraChica" style={{textAlign: 'center', fontFamily: '"roboto", sans-serif', fontWeight: '300', color: '#ffffff', fontSize: '85%'}}>© MYitinerary Page. 2020</p>
        </div>
        </>
    )
}

export default Footer