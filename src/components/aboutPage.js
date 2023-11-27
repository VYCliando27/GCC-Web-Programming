

import React from 'react';
import image1 from '../assets/images/anes.jpg';
import image2 from '../assets/images/toni.png';
import image3 from '../assets/images/indra.jpg'; // Ganti dengan path yang benar
import image4 from '../assets/images/enald.jpg'; // Ganti dengan path yang benar

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2>LOOK AT THIS</h2>
                <h1>WHAT YOU CAN SEE</h1>
                <p className="subtitle">OUR MENTOR AND TEAM</p>
                <p>Mengubah kreativitas menjadi inovasi adalah proses dinamis yang melibatkan merangkai ide-ide berani dan pemikiran asli ke dalam bentuk yang konkret, yang dapat mengubah cara kita hidup dan bekerja.
                </p>
            </div>
            <div className="images-layout">
                <div className="image-card" style={{ backgroundImage: `url(${image1})` }}>
                    <span>VENLY LIANDO</span></div>
                <div className="image-card-mid" style={{ backgroundImage: `url(${image2})` }}>
                    <span>TONI LIUNGAN</span>
                </div>
                <div className="image-card-mid" style={{ backgroundImage: `url(${image3})` }}>
                <span>PEMBIMBING</span>
                </div>
                <div className="image-card" style={{ backgroundImage: `url(${image4})` }}>
                    <span>REINALDY MUMEK</span>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
