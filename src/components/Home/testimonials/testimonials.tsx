import React from 'react';
import './testimonials.css'
import profile from '../../../assets/images/profile.png'
import commas from '../../../assets/icons/invertcommas.svg'


const Testimony = () => {
    return (
        <div className='testimonial'>
            <div className='testimonies'>
                <h2>Nile Safari Experience</h2>
                <hr />
                <div className='inside'>
                    <div className='first custom-elevation-z2'>
                        <p>This is the best tours and travela company in Uganda because it fulfills its services as a tourism company is recommended to do...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>David Luzuki</p>
                            <img src={profile} alt='profile' className='profile' />
                        </div>

                    </div>

                    <div className='second custom-elevation-z2'>
                        <p>This is the best tours and travela company in Uganda because it fulfills its services as a tourism company is recommended to do...I have really enjoyed my road trip to Sipi Falls kapochrwa...big up Damba tours and travels...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>Marie Sashah</p>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>

                    <div className='third custom-elevation-z2'>
                        <p>I have really enjoyed my road trip to Sipi Falls kapochrwa...big up Damba tours and travels...</p>
                        <div className='profile-section'>
                            <img src={commas} alt='profile' />
                            <p className='name'>Danny Selahh</p>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimony
