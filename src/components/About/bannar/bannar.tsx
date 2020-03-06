import React from 'react';
import styled from 'styled-components'
import skyview from '../../../assets/images/skyview.jpg'


const Band = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${skyview});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
    // linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 
`


const Bannar = () => {

    return (
        <Band>
            <div className='the-head'>
                <h1>About Page</h1>
            </div>
        </Band>
    )
}

export default Bannar;
