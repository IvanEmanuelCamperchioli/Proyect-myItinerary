import React from 'react'
import Menu from '../components/Menu'
import '../styles/user.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userActions'
import Browser from '../components/Browser'
import { GoogleLogin } from 'react-google-login'

class SignIn extends React.Component {

    state = {
        username: "",
        password: "",
        loading: false
    }

    leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState({
            [campo]: valor,
            loading: false
        })
    }

    sendInfo = async e => {
        e.preventDefault()
        const {username, password} = this.state
        if (username === "" || password === "") {
            alert('there are uncompleted fields')
            this.setState({loading: true})
        } else {
            const userLogIn = {
                user: this.state.username,
                password: this.state.password
            }
            const response = await this.props.userLogin(userLogIn)
            this.setState({loading: true})
            if (this.props.tokenLogin) { 
                alert(`bienvenido ${this.props.nameLogin}`)
                this.props.history.push('/home')
            }
        }
    }

    responseGoogle = response => {
        this.props.userLogin({
            user: response.profileObj.familyName,
            password: "123456Ab",
        })
    }


    render() {

    return (
        <>
        <Menu />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div className="formContainer">
                <h4 style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Please Log in to Continue</h4>
                <p style={{margin: '3vh 0'}}><b>If you have google account:</b></p>
                <GoogleLogin
                    clientId="1091047214357-jmph83rlufobglbf8dvakedddihmur4n.apps.googleusercontent.com"
                    buttonText="Log in whit google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <p style={{margin: '3vh 0'}}><b>If not:</b></p>
                <label style={{marginTop: '10px'}}>Username:</label>
                <input type='text' name="username" onChange={this.leerInput} />
                <label>password:</label>
                <input type='password' name="password" onChange={this.leerInput} />
                <div style={{display: 'flex', marginTop: '10px', width: '45%', justifyContent: 'space-between'}}>
                    <p>You haven't registered yet?</p>
                    <NavLink to="/createAccount">Sign Up</NavLink>
                </div>
                <Button className="button" size="lg" block onClick={this.sendInfo} disabled={this.state.loading}>Log in</Button>
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
    userLogin: userAction.userLogIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)