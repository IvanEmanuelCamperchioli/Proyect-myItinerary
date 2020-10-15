import React from 'react'
import Menu from '../components/Menu'
import Browser from '../components/Browser'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

class Cities extends React.Component {

    state = {
        loading: false
    }


    async componentDidMount() {
        this.setState({
            loading: true
        })
        await this.props.getCities()
        this.setState({
            loading: false
        })

    }

    elegirCiudad = e => {
        var evento = e.target.value
        this.props.filterCities(evento)
    } 

    render() {

        if (this.state.loading) {
            return  <div className="takeoff" style={{minHeight: '80vh', width: '100%', display: 'flex', 
            justifyContent: 'center', alignItems: 'center', fontSize: '25px', fontFamily: 'sans-serif'}}><Spinner color="primary"/>Loading...</div>
        }

        return (
            <>
                <Menu />
                <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>    
                    <input className="input" style={{width: '30vw', height: '7vh', textAlign: 'center', fontSize: '15px', 
                        border: '1px solid #000066', margin: '7px 0px 7px 0px'}} 
                        type="text" placeholder="Search the city to visit" name="city" id="city"
                        onChange={this.elegirCiudad} />
                </div>
                <div className="takeoff"  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <ul>
                        {this.props.filteredCities.map(city => {
                            const ciudad = require(`../images/${city.imageURL}`)
                            return (
                                <Link style={{cursor: 'default'}} key={city._id} to={`/itinerary/${city._id}`}>
                                    <div key={city.country} className="etiquetaImg" style={{backgroundImage: `url(${ciudad})`, backgroundPosition: 'center', borderRadius: '10px',
                                        backgroundSize: 'cover', width: '35vw', minWidth: '35vw', height: '18vw', marginBottom: '3vh', marginTop: '1vh'}}>
                                        <h6 key={city.name} className="textoCiudad" style={{backgroundColor: '#f5973d', width: '15vw', fontSize: '18px', 
                                            textAlign: 'center', color: '#191919', opacity: '0.8', fontFamily: 'sans-serif', borderRadius: '8%'}}>
                                            {city.name}, {city.country}
                                        </h6>
                                    </div>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                </div>
                <Browser />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities,
        filteredCities: state.citiesReducer.filteredCities
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)