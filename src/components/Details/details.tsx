import React from 'react';
import styled from 'styled-components';
import nilesafari1 from '../../assets/images/nilesafari1.jpg'
import nilesafari3 from '../../assets/images/nilesafari3.jpg'
import nilesafari11 from '../../assets/images/nilesafari11.jpg'
import DJI_0183 from '../../assets/images/DJI_0183.jpg'

import './details.css'

const Details = styled.div`
  
  .containe {
    display: flex;
    width: 75%;
    height: ;
    margin: auto;
    justify-content: space-between;
    padding: 80px 0;
    
  }
  div.container {
    margin-top: 100px;
  }

  .overview {
    border: 1px solid #D5AF6D;
    width: 30%;
    padding: 30px 20px;
  }
  .overview div {
    display: flex;
    flex-direction: column;
  }

  .description div, .overview div {
    color: #808080;
  }

  .description {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .description div span, h4 {
    display: block;
    padding: 20px 0;
    font-family: Caviar Dreams Bold;
  }

  .description div span {
    color: #D5AF6D;
  }

  h4 {
    color: black;
  }

  hr {
    background: #D5AF6D;
    height: 3px;
    border: 1px solid #D5AF6D;
    margin: 20px 0;
  }
`


export default () => (
  <Details>

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
      </div>

  <div className='containe'>
    <div className='description'>
      <h2>Exclusive Banda</h2>
      <hr/>
      <div>
        <span>Room Description</span>
Exclusive honeymoon banda named MWEZI (Swahili word for Moon) is the ultimate romantic getaway, accommodating couples in our most elite banda suite. its exclusivity is in its Private plunge pool, king size star bed with a complementary view of the flowing River Nile.
<br/><br/>
Mwezi is the ideal setting to celebrate a special occasion with a glass of champagne while appreciating the endless beauty of nature.
        <span>Romance Factor</span>
Perched on the riverbank, overlooking the majestic River Nile surrounded by the wildlife you have a feeling of remoteness and isolation that many other lodges in the region cannot offer. The view from your plunge pool is simply magnificent, it’s your own private paradise in the wilderness.

      </div>

    </div>

    <div className='overview'>
      <div>
        <h4>Room Overview</h4>
      <span>Bed: Kingsize</span>
      <span>Occupancy:2-3</span>
      <span>Mini-Bar: Available</span>
      <span>Pre Safari Services: Early morning</span>
      </div>
      

      <div>
        <h4>Amenities</h4>
      <span>Mini Fridge</span>
      <span>Fans</span>
      <span>Safe</span>
      <span>Day bed</span>
      <span>Wi-Fi</span>
      <span>Monsoon shower</span>
      <span>Bathtub</span>
      <span>Outdoor shower</span>
      <span>Deck</span>
      <span>En-suite toilet & Bidet</span>
      </div>
    </div>
  </div>

  </Details >
)