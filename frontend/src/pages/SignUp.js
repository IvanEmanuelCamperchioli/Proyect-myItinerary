import React from 'react'
import Menu from '../components/Menu'
import Browser from '../components/Browser'
import '../styles/user.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import { connect} from 'react-redux'
import userAction from '../redux/actions/userActions'
import { GoogleLogin } from 'react-google-login'

class SignUp extends React.Component {

    state = {
        urlPick: "",
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        loading: false
    }

    leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState({
            [campo]: valor,
        })
    }

    sendInfo = async e => {
        e.preventDefault()
        this.setState({loading: true})
        const {urlPick, username, password, firstname, lastname, email, country} = this.state
        if (urlPick === "" || username === "" || password === "" || firstname === "" ||
            lastname === "" || email === "" || country === "") {
                alert('there are uncompleted fields')
                this.setState({loading: false})
            } else {
            const userToSignUp = {
                urlPick: this.state.urlPick,
                user: this.state.username,
                password: this.state.password,
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email,
                country: this.state.country
            }
            const response = await this.props.createAccount(userToSignUp)
            this.setState({loading: false})
            console.log(this.props.tokenLogin)
            if (this.props.tokenLogin) { 
                alert(`bienvenido ${this.props.nameLogin}`)
                this.props.history.push('/home')
            }
        }
    }

    responseGoogle = response => {
        console.log(response.profileObj.googleId + "1Ab")
        this.props.createAccount({
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            user: response.profileObj.email,
            password: response.profileObj.googleId + "Ab",
            urlPick: response.profileObj.imageUrl,
            email: response.profileObj.email,
            country: 'Argentina'
        })
    }

    render() {

        const countriesArr = ["Argentina", "Mexico", "United States", "Brazil", "Canada", "Perú", "Paraguay", "Uruguay", 
                            "United Kingdom", "Switzerland", "Sweden", "Portugal", "Greece", "France", "Germany", "Italy",
                            "China", "Japan", "Russia", "India", "Netherlands", "Egypt", "Israel"]

        const countries = countriesArr.sort()

        return (
            <>
                <Menu />
                <div className="signUp" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div className="formContainer">
                        <h4 style={{marginBottom: '10px', textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Create Account</h4>
                        <GoogleLogin className='googleButton'
                            clientId="1091047214357-jmph83rlufobglbf8dvakedddihmur4n.apps.googleusercontent.com"
                            buttonText="create account whit google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <p style={{margin: '3vh 0'}}><b>or you can register from our site</b></p>
                        <label>Your pic URL:</label>
                        <input type='text' name="urlPick" onChange={this.leerInput} placeholder="URL image" />
                        <label>Username:</label>
                        <input type='text' name="username" onChange={this.leerInput} placeholder="for example johnSmith (min 3 characters)" />
                        <label>Password:</label>
                        <input type='password' name="password"
                        onChange={this.leerInput} placeholder="Enter your password (min 8 characters)" />
                        <label>First name:</label>
                        <input type='text' name="firstname"
                        onChange={this.leerInput} placeholder="Enter your first name (min 3 characters)" />
                        <label>Last name:</label>
                        <input type='text' name="lastname" onChange={this.leerInput} placeholder="Enter your last name (min 3 characters)" />
                        <label>Email:</label>
                        <input type='text' name="email" onChange={this.leerInput} placeholder="Enter your Email" />
                        <label>Choose a country</label>
                        <select onChange={this.leerInput} name="country">
                            <option  value="">--Please choose one--</option>
                            {countries.map(country => {
                                return (
                                    <option value={country}>{country}</option>
                                )
                            })}
                        </select>
                        <div style={{display: 'flex', marginTop: '10px', width: '40%', justifyContent: 'space-between'}}>
                            <p>Already have an account?</p>
                            <NavLink to="/signIn">Log in</NavLink>
                        </div>
                        <Button className="button" size="lg" block onClick={this.sendInfo} disabled={this.state.loading} >
                            {this.state.loading ? 'please verify the entry' : 'Sign Up'}
                        </Button>
                    </div>
                </div>
                <Browser />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        tokenLogin: state.userReducer.token,
        nameLogin: state.userReducer.firstName
    }
}

const mapDispatchToProps = {
    createAccount: userAction.createAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
