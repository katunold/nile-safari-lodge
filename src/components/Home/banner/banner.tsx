import React from 'react';
import video from '../../../assets/videos/banner.mp4'
import './banner.css';

const Banner = () => {

    return (
        <div className='banner'>
            <div className='nilesafarivideo'>
                <div className='background'></div>

                <video
                    src={video}
                    className='videobg'
                    autoPlay
                    loop
                    muted
                ></video>
            </div>

            <div className="content">
                <h1>Nile Safari Lodge</h1>
                <hr />
                <p>A luxurious lodge that provides an unforgettable<br />wildlife experience within the scenic beauty of the<br />Murchison Falls National Park.</p>
                <button className='btn'>View our Blog</button>
            </div>
        </div>
    )
}

export default Banner;
