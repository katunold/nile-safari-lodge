import React from 'react';
import JoinUs from '../../../shared/join/join';
import Details from '../detailStyle'

import './details.css'


export default () => (

  <Details>
    <div className='detail-container'>
      <div className='detail-box a'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Exclusive-Banda-Nile-Safari-Lodge.jpgj_.jpg' alt='sketch' />
      </div>
      <div className='detail-box b'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Exclusive-Banda-Nile-Safari-Lodge.jpg3_.jpg' alt='sketch' />
      </div>
      <div className='detail-box c'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Exclusive-Banda-Nile-Safari-Lodge.jpgo_.jpg' alt='sketch' />
      </div>
      <div className='detail-box d'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/aqQQd.jpg' alt='sketch' />
      </div>
      <div className='detail-box e'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Exclusive-Banda-Nile-Safari-Lodge.jpg2_.jpg' alt='sketch' />
      </div>
    </div>

    <div className='contain'>
      <div className='description'>
        <h2>Exclusive Banda</h2>
        <hr />
        <div>
          <p><span>Room Description</span>
          Exclusive honeymoon banda named MWEZI (Swahili word for Moon) is the ultimate romantic getaway, accommodating couples in our most elite banda suite. its exclusivity is in its Private plunge pool, king size star bed with a complementary view of the flowing River Nile.
          <br /><br />
          Mwezi is the ideal setting to celebrate a special occasion with a glass of champagne while appreciating the endless beauty of nature.
          <span>Romance Factor</span>
          Perched on the riverbank, overlooking the majestic River Nile surrounded by the wildlife you have a feeling of remoteness and isolation that many other lodges in the region cannot offer. The view from your plunge pool is simply magnificent, it’s your own private paradise in the wilderness.</p>
        </div>

      </div>

      <div className='overview custom-elevation-z2'>
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

    <JoinUs />

  </Details >
)
