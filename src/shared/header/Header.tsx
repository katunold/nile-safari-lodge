import React from 'react';
import './header.css';
import logo from '../../assets/nileSafariff.png';
import CSS from 'csstype'
import MobileNav from '../MobileNav/mobileNav'
import { Link } from 'react-router-dom';


const style: CSS.Properties = {
    width: '0',
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(213, 175, 109)',
    overflowX: 'hidden',
    transition: "all 0.5s ease 0s",
}

class Header extends React.Component {

    showNav: boolean = false;
    state = {
        style
    }

    openNavBar = () => {
        this.showNav = !this.showNav;
        this.setState({
            style: {
                width: this.showNav ? '100%' : '0',
                height: '100%',
                position: 'fixed',
                zIindex: 1,
                left: 0,
                top: 0,
                backgroundColor: 'rgba(213, 175, 109)',
                overflowX: 'hidden',
                transition: "all 0.5s ease 0s",
            },
            showNav: true
        })
    }

    render() {
        return (
            <div className='header'>
                <div className='nav'>
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

                    <div className='menu' onClick={this.openNavBar}>
                        <div className='bar half start'></div>
                        <div className='bar'></div>
                        <div className='bar half end'></div>
                    </div>
                </div>

                <MobileNav style={this.state.style}>
                    <button onClick={this.openNavBar} className='close'>&times;</button>
                    
                    <div className="overlay__links">
                        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                        <Link to="/">Home</Link>
                        <Link to="/notfound">Activities</Link>
                        <Link to="/notfound">Accommodation</Link>
                        <Link to="/notfound">Facilities</Link>
                        <Link to="/notfound">Gallery</Link>
                        <Link to="/about">About</Link>
                    </div>
                </MobileNav>
            </div>
        )
    }
}

export default Header;
