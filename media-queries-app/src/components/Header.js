import React, {Component} from 'react';
import "../App.css"

export default class Header extends Component {
    constructor () {
        super ()
        
        this.state = {
            mobileMenuOpen: false
        }
    }

    toggleMobileMenu = () => {
        this.setState ({
          mobileMenuOpen: !this.state.mobileMenuOpen
        })
      }
    
    render () {
        return (
            <div className='header'>
                <img className="start-bootstrap-image" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Start Bootstrap Logo"/>
                <nav className="nav-container">
                    <ul className='nav-bar'>
                        <li className='nav-link'>SERVICES</li>
                        <li className='nav-link'>PORTFOLIO</li>
                        <li className='nav-link'>ABOUT</li>
                        <li className='nav-link'>TEAM</li>
                        <li className='nav-link'>CONTACT</li>
                    </ul>
                </nav>
                <nav className="mobile-nav-bar">
                    <img className="hamburger" src="./hamburger-menu.png" alt="Hamburger Menu" onClick={this.toggleMobileMenu}/>
                    <ul className={`mobile-nav-list ${this.state.mobileMenuOpen ? 'mobile-nav-list-open' : null}`}>
                        <li className='mobile-nav-link'>SERVICES</li>
                        <li className='mobile-nav-link'>PORTFOLIO</li>
                        <li className='mobile-nav-link'>ABOUT</li>
                        <li className='mobile-nav-link'>TEAM</li>
                        <li className='mobile-nav-link'>CONTACT</li>
                    </ul>
                </nav>
            </div>
        )
    }
}