import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import './styles/generalStyles.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/Footer'
import Itinerary from './pages/Itinerary'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import userAction from './redux/actions/userActions'

class App extends React.Component {

  render() {

    if (this.props.tokenLogin) {
      var rutas = (
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/itinerary/:id" component={Itinerary} />
        <Route path="/createAccount" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/home" />
      </Switch>  
      )
    } else if (localStorage.getItem('token')) {
      this.props.localStorageLogin(localStorage.getItem('token'))
    } else {
       var rutas = (
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/itinerary/:id" component={Itinerary} />
        <Route path="/createAccount" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/home" />
      </Switch>  
      )
    }
  
    return (
      <>
      <BrowserRouter>
        {rutas}
        <Footer />
      </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    tokenLogin: state.userReducer.token
  }
}

const mapDispatchToProps = {
  localStorageLogin: userAction.localStorageLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
