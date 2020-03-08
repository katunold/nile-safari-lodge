import React from 'react';
import styled from 'styled-components';
import location from '../../assets/icons/location.svg'
import phone from '../../assets/icons/phone.svg'
import email from '../../assets/icons/email.svg'
import skyview from '../../assets/images/skyview.jpg'


const Contact = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${skyview});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
    padding: 50px 0;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 767px) {
        padding: 50px 0;
    }
`

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;

    div {
        text-align: center;
        color: #fff;
        margin: 0 7px; 
    }

    div .img-icon {
        width: 60px;
        margin: 20px;
    }

    @media (min-width: 320px) and (max-width: 575px) {
        flex-direction: column;
        width: 75%;

        div {
            margin: 25px 0;
        }

        div .img-icon {
            width: 50px;
        }
    }

    @media (min-width: 576px) and (max-width: 1024px) {
        width: 90%;
    }
`

const Contacts = () => {
    return (
        <Contact>
            <Main>
                <div className='address'>
                    <h3>Address</h3>
                    <img src={location} alt='phone' className='img-icon' />
                    <p>Murchison Falls National Park</p>
                </div>

                <div className='phone'>
                    <h3>Phone number</h3>
                    <img src={phone} alt='phone' className='img-icon' />
                    <p>+256 772 363 362 <br />
                    +256 757 363 362</p>
                </div>

                <div className='email'>
                    <h3>Email</h3>
                    <img src={email} alt='phone' className='img-icon' />
                    <p>Murchison Falls National Park</p>
                </div>
            </Main>
        </Contact>
    )
}

export default Contacts;
