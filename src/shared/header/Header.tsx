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
        style,
        hideNav: true
    }
    myRef = React.createRef();

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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: any) => {
        let scrollPosition = window.pageYOffset;
        if (scrollPosition > 775) {
            this.setState({ hideNav: false });
        } else {
            this.setState({ hideNav: true });
        }
    }

    render() {
        return (
            <div className={this.state.hideNav ? 'hide header' : ' header show'}>
                <div className={this.state.hideNav ? 'cover cover-show' : 'cover cover-hide'}></div>
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
                        <Link to="/activities">Activities</Link>
                        <Link to="/accommodate">Accommodation</Link>
                        <Link to="/facilities">Facilities</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                    </div>
                </MobileNav>

                <script></script>
            </div>
        )
    }
}

export default Header;
