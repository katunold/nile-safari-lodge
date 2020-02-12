import React from 'react';
import './required.css';

class Header extends React.Component {
    render() {
        return (
            <div className='heading'>
                <header>
                    <img src='/logo' alt='logo'/>

                    <nav>
                        <ul className='nav__links'>
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>Listings</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </nav>

                    <a className='signup'>Sign Up</a>
                    <p className='menu signup'>Menu</p>
                </header>
            </div>
            // <div className='heading'>
            //     <header>
            // (onclick)="openNav()"
            //         <img className='logo' src='/assets/logo.svg' alt='logo' />
            //         <nav>
                        // <ul class="nav__links">
                        //     <li><a href="#">Home</a></li>
                        //     <li><a href="#">Services</a></li>
                        //     <li><a href="#">Listings</a></li>
                        //     <li><a href="#">About</a></li>
                        // </ul>
            //         </nav>
                    // <a class="signup" href="#">Sign Up</a>
                    // <p (onclick)="openNav()" class="menu signup">Menu</p>
            //     </header>

            //     <div id="mobile__menu" class="overlay">
            //         <a class="close" (onclick)="closeNav()">&times;</a>
            //         <div class="overlay__content">
            //             <a href="#">Services</a>
            //             <a href="#">Projects</a>
            //             <a href="#">About</a>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Header;