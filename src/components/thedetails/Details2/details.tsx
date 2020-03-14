import React from 'react';
import JoinUs from '../../../shared/join/join';
import Details from '../detailStyle'
import './details.css'


export default () => (

  <Details>
    <div className='detail-container'>
      <div className='detail-box a'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Family-banda.-Nile-safari-lodge.jpgfhf.jpg' alt='sketch' />
      </div>
      <div className='detail-box b'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Family-banda.-Nile-safari-lodge.jpg-Showers-sink.jpg' alt='sketch' />
      </div>
      <div className='detail-box c'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Family-banda.-Nile-safari-lodge.jpg-Terrace.jpg' alt='sketch' />
      </div>
      <div className='detail-box d'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Family-banda.-Nile-safari-lodge.jpgd_.jpg' alt='sketch' />
      </div>
      <div className='detail-box e'>
        <img src='https://nilesafarilodge.com/wp-content/uploads/2019/09/Family-banda.-Nile-safari-lodge.jpgMezzainne.jpg' alt='sketch' />
      </div>
    </div>

    <div className='contain'>
      <div className='description'>
        <h2>Family Banda</h2>
        <hr />
        <div>
          <p><span>Room Description</span>
          Exclusive family banda named DUNIA (Swahili word for Earth) is the ideal option for larger groups. It accommodates four to eight guests. It has two master bedrooms with four single beds and two king size beds, spacious living room and private terrace with optional lunch service.
<br /><br />
It has a private swimming pool with a stunning view of the shoebill peninsula.</p>
        </div>

      </div>

      <div className='overview custom-elevation-z2'>
        <div>
          <h4>Room Overview</h4>
          <span>Bed: 2 Kingsize, 4 Singles</span>
          <span>Occupancy: 8-9</span>
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
          <span>Private swimming pool</span>
          <span>Commune seating room</span>

        </div>
      </div>
    </div>

    <JoinUs />

  </Details >
)
