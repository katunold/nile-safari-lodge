import React from 'react';
import Band from '../../shared/band/band';
import JoinUs from '../../shared/join/join';

import crest from '../../assets/images/crest.jpg';
import elles from '../../assets/images/elles.jpg'
import river from '../../assets/images/river.jpg'
import falls from '../../assets/images/falls.jpg'
import kobbbs from '../../assets/images/kobbbs.jpg'
import chimpanzees from '../../assets/images/chimpanzees.jpg'
import './activities.css';


const Activity = () => {

    return (
        <div>
            <Band title="Activities"/>
            <div className='the-acts'>
                <h2>What you can do</h2>
                <hr />
                <p className='paragraph'>The thrill of going on a game drive is hard to even imagine, so we urge you to try and utilise all the views that you can land on, keep your binoculars handy as you never know what you’ll spot! Have a clean relaxing rest after a day full of visual excitment since there are som many things that you can do from here and now.</p>
                <div className='containa'>
                    <div className='sect'>
                        <img src={elles} alt='site-sketch' />
                        <div className='about-content'>
                            <h3>Game Drive</h3>
                            <p>Undoubtedly the highlight of any safari is the game drive. From the comfort of a 4×4 safari vehicle, you can experience the thrill of viewing wildlife in its natural environment. You are certain to spot and catch some great photos of the legendary big five.</p>
                        </div>
                    </div>
                    <div className='sect'>
                        <div className='about-content'>
                            <h3>Bird Watching</h3>
                            <p>Home to over 1,100 species of birds, Uganda is a bird watchers’ paradise. This includes Crested Crane, Abyssinian Ground Hornbill, African Fish Eagle, and the very shy majestic Shoebill Stork. The location of the Nile lodge makes it an ideal place for ornithologists and keen bird watchers.</p>
                        </div>
                        <img src={crest} alt='site-sketch' />
                    </div>
                    <div className='sect'>
                        <img src={river} alt='site-sketch' />
                        <div className='about-content'>
                            <h3>Nile River Cruise</h3>
                            <p>An excellent alternative to the game drive is an exciting boat ride along the green and lush curves of the mystical Nile with a perfect view of the Murchison Falls.</p>
                        </div>
                    </div>
                    <div className='sect'>
                        <div className='about-content'>
                            <h3>Bike Safaris</h3>
                            <p>In partnership with Uganda Bike Safaris, we offer a different kind of safari experience on two wheels. Our Motorbike safaris can cater to riders with different levels of experience.</p>
                        </div>
                        <img src={kobbbs} alt='site-sketch' />
                    </div>
                    <div className='sect'>
                        <img src={falls} alt='site-sketch' />
                        <div className='about-content'>
                            <h3>Murchision Falls Trek</h3>
                            <p>The hike to the top of the Murchison Falls is perhaps the most special activity for nature lovers, joined with a boat cruise on the Nile it is the perfect combination of tranquil bliss and wild beauty that takes you to the basin of the falls.</p>
                        </div>
                    </div>
                    <div className='sect'>
                        <div className='about-content'>
                            <h3>Chimpanzee Tracking</h3>
                            <p>Uganda has a modest population of about five thousand chimpanzees distributed throughout the country, across various forests and game parks.</p>
                        </div>
                        <img src={chimpanzees} alt='site-sketch' />
                    </div>
                </div>
            </div>
            <JoinUs />
        </div>
    )
}

export default Activity;
