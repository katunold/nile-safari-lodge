import React from 'react';
import girafs from '../../../assets/images/girafs.jpg';
import crest from '../../../assets/images/crest.jpg';
import elles from '../../../assets/images/elles.jpg';
import huts from '../../../assets/images/huts.jpg';
import lodge from '../../../assets/images/lodge.jpg';
import room from '../../../assets/images/room.jpg';
import swimming from '../../../assets/images/swimming.jpg';
import river from '../../../assets/images/river.jpg';
import './cards.css'

const Cards = () => {
    return (
        <div>
            <ul className="cards-showcase clearfix">
                <li>
                    {/* <h3>Activies</h3> */}
                    <figure className="photo">
                        <img src={huts} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={girafs} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={room} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={swimming} alt='card-pic' />
                    </figure>
                </li>
            </ul>

            <ul className="cards-showcase clearfix">
                <li>
                    <figure className="photo">
                        <img src={crest} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={lodge} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={elles} alt='card-pic' />
                    </figure>
                </li>
                <li>
                    <figure className="photo">
                        <img src={river} alt='card-pic' />
                    </figure>
                </li>
            </ul>
        </div>
    )
}

export default Cards;
