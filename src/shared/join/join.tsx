import React from 'react';
import styled from 'styled-components';


const Join = styled.div`

    padding: 40px 0;
    width: 100%;
    display: flex;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08) !important;

    .content {
        width: 65%;
        margin: 0 auto;
    }

    .content {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }

    .content .text h2 {
        margin-bottom: 10px;
        
    }

    .content .text h2 {
        color: #d5af6d;
    }

    .content .btn {
        background-color: #d5af6d;
        font-family: Caviar Dreams Bold;
        font-size: 18px;
        text-transform: uppercase;
        border: 1px solid #d5af6d;
        height: 55px;
        width: 175px;
        transition: all 0.3s ease 0s;
        color: #fff;
        border-radius: 7px;
        outline: none;
    }
    
    .content .btn:hover {
        background: transparent;
        color: #d5af6d;
        border: 1px solid #d5af6d;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        
        .content {
            width: 75%;
            text-align: center;
            flex-direction: column;
        }

        .content .text h2 {
            margin-bottom: 25px;
        }

        .content .btn {
            margin-top: 35px;
        }
    }
`


const JoinUs = () => {

    return (
        <Join>
            <div className='content'>
                <div className='text'>
                    <h2>Start now, Book your reservation</h2>
                    <p>Be the first to know about our offers, keep up to date with what's happening and book yourself<br />a reservation at Nile Safari Lodge. </p>
                </div>

                <button className='btn'>Book Now</button>
            </div>
        </Join>
    )
}

export default JoinUs;
