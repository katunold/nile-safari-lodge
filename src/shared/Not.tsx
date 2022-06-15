import React from 'react'
import styled from 'styled-components'
import logo from '../assets/nileSafariOrig.png';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    img {
        width: 170px;
        margin: 0 0 20px;
    }

    h1 {
        font-size: 270px;
        margin: 0;
    }

    p {
        color: #d5af6d;
        font-size: 25px;
        font-weight: 500;
        width: 550px;
        margin: 0;
    }

    .btn {
        margin-top: 30px;
        background: transparent;
        font-family: Rubik;
        font-size: 18px;
        outline: none;
        text-transform: uppercase;
        border: 1px solid #d5af6d;
        font-weight: 500;
        padding: 15px 35px;
        transition: all 0.3s ease 0s;
        color: #d5af6d;
        border-radius: 7px;
    }
      
    .btn:hover {
        background: #d5af6d;
        color: #ffffff;
    }

    @media screen and (max-width: 480px) {
        img {
            width: 120px;
        }
    
        h1 {
            font-size: 120px;
        }
    
        p {
            font-size: 15px;
            width: 250px;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        h1 {
            font-size: 220px;
        }
    
        p {
            font-size: 20px;
            width: 370px;
        }
    }
`

const Notfoundpage = () => {
    const history = useHistory()
    return (
        <Container>
            <img src={logo} alt='not found' />
            <h1>404</h1>
            <p>This page might be under contruction or is not available but please keep calm and thanks for trying to access it</p>
            <button onClick={() => history.goBack()} className='btn'>Go back</button>
        </Container>
    )
}

export default Notfoundpage;
