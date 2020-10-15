import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav,  UncontrolledDropdown, DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
 } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Menu = (props) => {

  const [isOpen] = useState(true)

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  const toggle1 = () => setDropdownOpen(prevState => !prevState)


  return (
    <div className="main">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        { !props.nameLogin
        ? (
          <>
            <DropdownToggle className="radio" style={{borderBlockColor: 'none'}}>
              <img className="user" src={process.env.PUBLIC_URL + './iconoNuevoUsuario.png'} alt="newUser" />       
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink to="/createAccount" style={{textDecoration: 'none'}}>Create acount</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink to="/SignIn" style={{textDecoration: 'none'}}>Log in</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </>
        )
        : (
          <>
            <DropdownToggle className="radio" style={{borderBlockColor: 'none'}}>
              <div style={{backgroundImage: `url(${props.imgUser})`, backgroundSize: 'cover',
              backgroundPosition: 'center', width: '5.5vw', height: '5.5vw', borderRadius: '100%'}}  /> 
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink to="/logout" style={{textDecoration: 'none'}}>Log out</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </>
        )
        }
      </Dropdown> 
      
      <Navbar color="faded" light expand="md">
        <NavbarToggler toggle={toggle1} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="md-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <img className="menu" src={process.env.PUBLIC_URL + './menu3.png'} alt="menu" />    
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink to="/home" style={{textDecoration: 'none'}}>Home</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink to="/cities" style={{textDecoration: 'none'}}>Cities</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar> 
    </div>
  )
}

const mapStateToProps = state => {
  return {
    nameLogin: state.userReducer.firstName,
    imgUser: state.userReducer.urlPick
  }
}

export default connect(mapStateToProps)(Menu)

