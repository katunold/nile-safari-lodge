import React from 'react';
import Band from '../../shared/band/band';

import crest from '../../assets/images/nilesafari4.jpg';
import swimming from '../../assets/images/swimming.jpg';
import nilesafari3 from '../../assets/images/nilesafari3.jpg';
import drinks from '../../assets/images/drinks.jpg';
import '../../components/Activities/activities.css';


const Facility = () => {

    return (
        <div className='the-facility'>
            <Band title='Facilities' />
            <div className='the-acts'>
                <h2>Our offers</h2>
                <hr />
                <p className='paragraph'>Checkout our amazing facilities offered to our customers. Experience with us the provisons of the wonderful food and catering that has great taste and wonderful drinks accompaning it.</p>
                <div className='containa'>
                    <div className='sect'>
                        <img src={crest} alt='site-sketch' />
                        <div className='about-content'>
                            <h3>Laini Restaurant</h3>
                            <p>Our restaurant Laini, created a menu that reflects an exquisite variety of both African and European cuisine, ensured to satisfy an international palette while also still catering to any dietary requests.
<br /><br />
Our innovative, professional and seasoned chefs design new menus every day, tailored to our guests. We strive to deliver impeccable services and initiate the practice of self-sustainability. All of our fresh produce comes directly from our traditional garden (greenhouse).</p>
                        </div>
                    </div>
                    <div className='sect'>
                        <div className='about-content'>
                            <h3>Infinity Swimming Pool</h3>
                            <p>Our idyllic salt-based infinity pool is located near our main areas overlooking the River Nile. One can enjoy the view from the curved wall that creates the classic “infinity” effect, blurring the water of the pool with the river in the background, merging all your views into one cohesive scenic display.
<br /><br />
The ultimate setting to enjoy any refreshments is within our built-in sun lounger that is partially shaded by a cool thatched roof, which is particularly comfortable in the hot season & with close proximity to the pool bar.</p>
                        </div>
                        <img src={swimming} alt='site-sketch' />
                    </div>
                    <div className='sect'>
                        <img src={nilesafari3} alt='site-sketch' />
                        <div className='about-content'>
                            <h3>Mtoni Spa</h3>
                            <p>Take time to spoil yourself, by relaxing and unwinding with our immense 180° panoramic views. For relaxation, the Mtoni Spa offers a range of pampering, beauty and wellness treatments on a naturally raised riverbank. With the song of the wilderness and with treatments that are tailored to your desires, we want you to leave the Mtoni Spa feeling refreshed and rejuvenated.</p>
                        </div>
                    </div>
                    <div className='sect'>
                        <div className='about-content'>
                            <h3>Peponi Lounge & Bar</h3>
                            <p>Overlooking the Nile & surrounding wildlife across the bank, for complete relaxation take a moment to kick your feet up in the soft tones of our private Peponi lounge.
<br /><br />
The lounge is a quiet zone to enjoy an aperitif or drink of your choice. We provide a wide selection of games from the traditional to the classics and with access to our WIFI, you may take a break from the fun to catch up in a serene spot.</p>
                        </div>
                        <img src={drinks} alt='site-sketch' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;

