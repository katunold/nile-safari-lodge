import React from 'react';
import Band from '../../../shared/band/band';
import nilesafari7 from '../../../assets/images/nilesafari7.jpg';
import nilesafari6 from '../../../assets/images/nilesafari6.jpg';
import DJI_0131 from '../../../assets/images/DJI_0131.jpg';
import './acco.css';
import { useHistory } from 'react-router-dom';


const Accommodat = () => {
    const history = useHistory();
    const goToDetails = () => {
        window.scrollTo(0,0)
        history.push('/details')
    }
    
    return (
        <div>
            <Band title="Accommodation" />
            <div className='the-bandas'>
                <h2>The Famous Bandas</h2>
                <hr />
                <p className='the-paragraph'>Our spacious rooms have incredible views, with breathtaking sceneries and an ideal spot to view wildlife on your private deck. We have eight bandas; a honeymoon suite with a plunge pool and star bed. A family banda consisting of two master rooms, a living room and a private swimming pool.
                <br />
                Imagine yourself elevated on your private deck on the river bank, one can view the Murchison Falls National Park and watch animals in their natural habitat.</p>
                <div className='the-container'>
                    <div className='the-card first'>
                        <div className='the-imgbox'>
                            <img src={nilesafari7} alt='first-banda' />
                        </div>
                        <div className='the-contentbox'>
                            <div className='small-bit'>
                                <h3>Luxurious Banda</h3>
                                <p>Our six bandas provide a high level of luxury and service inclusive of a traditional freestanding bathtub; perfect for relaxing and enjoying the evening views.</p>
                                <button className='btn' onClick={goToDetails}>View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className='the-card'>
                        <div className='the-imgbox'>
                            <img src={DJI_0131} alt='first-banda' />
                        </div>
                        <div className='the-contentbox'>
                            <div className='small-bit'>
                                <h3>Exclusive  Banda</h3>
                                <p>Exclusive honeymoon banda named MWEZI (Swahili word for Moon) is the ultimate romantic getaway, accommodating couples in our most elite banda suite consisting of its private plunge pool, king size star bed with a complementary view of the flowing River Nile.</p>
                                <button className='btn' onClick={goToDetails}>View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className='the-card'>
                        <div className='the-imgbox'>
                            <img src={nilesafari6} alt='first-banda' />
                        </div>
                        <div className='the-contentbox'>
                            <div className='small-bit'>
                                <h3>Family Banda</h3>
                                <p>Exclusive family banda named DUNIA (Swahili word for Earth) is the ideal option for larger groups. It accommodates four to eight guests.</p>
                                <button className='btn' onClick={goToDetails}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accommodat;
