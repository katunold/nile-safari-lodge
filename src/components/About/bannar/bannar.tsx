import React from 'react';
import styled from 'styled-components'
import skyview from '../../../assets/images/skyview.jpg'
import video from '../../../assets/videos/banner.mp4'


const Band = styled.div`

    .the-head {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.7)), url(${skyview});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        background-attachment:fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 320px;
    }

    .the-head h1 {
        font-size: 60px;
        margin-top: 100px;
        font-family: Ridin Dirty;
        color: #fff;
    }

    .the-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 0;
        text-align: center;
    }

    .the-content hr {
        width: 100px;
        border: 1px solid #d5af6d;
        margin: 35px 0;
    }

    .the-content .the-inside {
        display: flex;
        width: 75%;
        justify-content: space-between;
        // border: 1px solid red;
    }

    .the-video,
    .the-text {
        width: 48%;
    }

    .the-text {
        padding: 37px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        .the-head {
          margin-top: 100px;
        }
        .the-head h1 {
          font-size: 45px;
        }
    }
`


const Bannar = () => {

    return (
        <Band>
            <div className='the-head'>
                <h1>About</h1>
            </div>
            <div className='the-content'>
                <h2>About the Lodge</h2>
                <hr />
                <div className='the-inside'>
                    <p className='the-text'>Being strongly attached to Uganda and Murchison Falls National Park in particular, for more than 20 years,
                    Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures.
                        <br />
                        <br />
                        Nile Safari Lodge is a luxurious lodge that provides an unforgettable wildlife experience within the scenic beauty of the Murchison Falls National Park.</p>

                    <video
                        src={video}
                        className='the-video'
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </div>
        </Band>
    )
}

export default Bannar;
