import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Carrusel from '../components/Carrusel'

class Home extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <hr style={{width: '100%'}}></hr>
                <Header />
                <Carrusel />
            </>
        )
    }
}

export default Home