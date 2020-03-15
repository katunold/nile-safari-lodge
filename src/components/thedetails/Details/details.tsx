import React from 'react';
import JoinUs from '../../../shared/join/join';
import Details from '../detailStyle'
import './details.css'


export default () => (

  <Details>
    <div className='detail-container'>
      <div className='detail-box a'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Luxurious-Banda-Nile-Safari-Lodge-.jpg2_.jpg' alt='sketch' />
      </div>
      <div className='detail-box b'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Luxurious-Banda-Nile-Safari-Lodge-.jpg-Bathtub.jpg' alt='sketch' />
      </div>
      <div className='detail-box c'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Tolet.jpg' alt='sketch' />
      </div>
      <div className='detail-box d'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Luxurious-Banda-Nile-Safari-Lodge-.jpg-Showers.jpg' alt='sketch' />
      </div>
      <div className='detail-box e'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Luxurious-Banda-Nile-Safari-Lodge-.jpg-Deck-with-views.jpg' alt='sketch' />
      </div>
    </div>

    <div className='contain'>
      <div className='description'>
        <h2>Luxurious Banda</h2>
        <hr />
        <div>
          <p><span>Room Description</span>
          Our six bandas provide a high level of luxury and service inclusive of a traditional freestanding bathtub; perfect for relaxing and enjoying the evening views. A monsoon high-pressure indoor shower, vital for the early morning safari game drives and an outdoor shower designed to embrace the beauty of the nature surrounding your banda.</p>
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
