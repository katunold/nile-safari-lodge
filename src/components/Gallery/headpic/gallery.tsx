import React from 'react';
import Band from '../../../shared/band/band';
import './gallery.css';

import nilesafari1 from '../../../assets/images/nilesafari1.jpg';
import DSC_0018 from '../../../assets/images/DSC_0018.jpg';
import nilesafari3 from '../../../assets/images/nilesafari3.jpg';
import nilesafari4 from '../../../assets/images/nilesafari4.jpg';
import nilesafari5 from '../../../assets/images/nilesafari5.jpg';
import nilesafari6 from '../../../assets/images/nilesafari6.jpg';
import nilesafari7 from '../../../assets/images/nilesafari7.jpg';
import nilesafari9 from '../../../assets/images/nilesafari9.jpg';
import nilesafari10 from '../../../assets/images/nilesafari10.jpg';
import nilesafari11 from '../../../assets/images/nilesafari11.jpg';
import swimming from '../../../assets/images/swimming.jpg';
import lodge from '../../../assets/images/lodge.jpg';
import DJI_0183 from '../../../assets/images/DJI_0183.jpg';
import room from '../../../assets/images/room.jpg';
import bathroomview from '../../../assets/images/bathroomview.jpeg';
import bathroompic from '../../../assets/images/bathroompic.jpeg';
import DSC_0028 from '../../../assets/images/DSC_0028.jpg';
import DSC_3878 from '../../../assets/images/DSC_3878.jpg';
import DJI_0131 from '../../../assets/images/DJI_0131.jpg';
import huts from '../../../assets/images/huts.jpg';


const Gallery = () => {
    
    return (
        <div>
            <Band title="Gallery" />
            
            <div className='the-pics'>
                <h2>Our Pictorial Tour</h2>
                <hr />
                <div className='container'>
                    <div className='box a'>
                        <img src={nilesafari1} alt='sketch' />
                    </div>
                    <div className='box b'>
                        <img src={DJI_0183} alt='sketch' />
                    </div>
                    <div className='box c'>
                        <img src={nilesafari3} alt='sketch' />
                    </div>
                    <div className='box d'>
                        <img src={nilesafari11} alt='sketch' />
                    </div>
                    <div className='box e'>
                        <img src={nilesafari5} alt='sketch' />
                    </div>
                    <div className='box f'>
                        <img src={swimming} alt='sketch' />
                    </div>
                    <div className='box g'>
                        <img src={lodge} alt='sketch' />
                    </div>
                    <div className='box h'>
                        <img src={room} alt='sketch' />
                    </div>
                    <div className='box i'>
                        <img src={nilesafari4} alt='sketch' />
                    </div>
                    <div className='box j'>
                        <img src={nilesafari6} alt='sketch' />
                    </div>
                    <div className='box k'>
                        <img src={DJI_0131} alt='sketch' />
                    </div>
                    <div className='box l'>
                        <img src={nilesafari10} alt='sketch' />
                    </div>
                    <div className='box a'>
                        <img src={bathroomview} alt='sketch' />
                    </div>
                    <div className='box b'>
                        <img src={nilesafari7} alt='sketch' />
                    </div>
                    <div className='box c'>
                        <img src={nilesafari3} alt='sketch' />
                    </div>
                    <div className='box d'>
                        <img src={DSC_3878} alt='sketch' />
                    </div>
                    <div className='box e'>
                        <img src={nilesafari9} alt='sketch' />
                    </div>
                    <div className='box f'>
                        <img src={DSC_0018} alt='sketch' />
                    </div>
                    <div className='box g'>
                        <img src={DSC_0028} alt='sketch' />
                    </div>
                    <div className='box h'>
                        <img src={bathroompic} alt='sketch' />
                    </div>
                    <div className='box i'>
                        <img src={huts} alt='sketch' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
