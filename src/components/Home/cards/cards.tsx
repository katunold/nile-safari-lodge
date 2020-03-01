import React from 'react';
// import girafs from '../../../assets/images/girafs.jpg';
import crest from '../../../assets/images/crest.jpg';
import elles from '../../../assets/images/elles.jpg';
import huts from '../../../assets/images/huts.jpg';
// import lodge from '../../../assets/images/lodge.jpg';
import room from '../../../assets/images/room.jpg';
import swimming from '../../../assets/images/swimming.jpg';
import river from '../../../assets/images/river.jpg';
import './cards.css'


const Cards = () => {

    return (
        <div>
            <ul className="cards-showcase clearfix">
                <li>
                    <figure className="photo">
                        <img src={huts} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>About Us</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={swimming} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Activities</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={room} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Accommodation</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={swimming} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Book a Stay</h1>
                    </div>
                </li>
            </ul>

            <ul className="cards-showcase clearfix">
                <li>
                    <figure className="photo">
                        <img src={crest} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Our Offers</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={room} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Facilites</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={elles} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Gallery</h1>
                    </div>
                </li>
                <li>
                    <figure className="photo">
                        <img src={river} alt='card-pic' />
                    </figure>
                    <div className='compliment'>
                        <h1>Contact Us</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cards;
