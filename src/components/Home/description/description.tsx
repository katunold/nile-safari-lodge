import React from 'react';
import JoinUs from '../../../shared/join/join';
import Describe from './descript';
import logo from '../../../assets/nileSafariOrig.png';


const Description = () => {
    return (
        <Describe>
            <JoinUs />

            <div className='small_descipt'>
                <p>Experience the wonders of Uganda in style, witnessing exciting wildlife spectacles and stunning landscapes from our luxury lodge perched on the southern bank of the River Nile.<br />
                    In the remote beautiful, savannah the Lodge is a luxurious escape and the ultimate private safari experience.
                    <br />
                    Nile Safari Lodge is a luxurious lodge that provides an unforgettable wildlife experience within the scenic beauty of the Murchison Falls National Park.</p>

                <img className='logo' src={logo} alt='logo' />
            </div>

            <div className='know__us'>
                <div className='content'>
                    <div className='text'>
                        <h2>Take a deep dive into the Lodge</h2>
                        <p>Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures. </p>
                    </div>

                    {/* <button className='btn'>Book Now</button> */}
                </div>
            </div>
        </Describe>
    )

}

export default Description;
