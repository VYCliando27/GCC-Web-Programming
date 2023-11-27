import React from 'react';
import '../style/style.css'; // Pastikan Anda memiliki file CSS dengan nama ini

import backgroundImage from '../assets/images/a.jpg'; // Ganti dengan path yang benar
import image1 from '../assets/images/111.png'; // Ganti dengan path yang benar
import image2 from '../assets/images/333.jpeg'; // Ganti dengan path yang benar
import image3 from '../assets/images/222.png'; // Ganti dengan path yang benar

const TourGuide = () => {
  return (
      <div className="tour-guide-container" >
      <div className="content glass-effect">    
      <div className="content">
              <h1>Amazing NORWAY</h1>
              <p>Visit Norway, you will never regret it. This is something incredible - 
              fantastic nature, fjords, fancy outlines of the coast...</p>
              <div className="polygon" style={{ backgroundImage: `url(${image1})` }}>
                  <div className="text">Wonderful</div>
              </div>
              <div className="polygon" style={{ backgroundImage: `url(${image2})` }}>
                  <div className="text">Better</div>
              </div>
              <div className="polygon" style={{ backgroundImage: `url(${image3})` }}>
                  <div className="text">Quality</div>
              </div>
              <div className="button-polygon">
                  <button>BOOK A TOUR</button>
              </div>
          </div>
          </div>
      </div>
  );
}

export default TourGuide;
