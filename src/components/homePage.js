import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

import facebook from '../assets/images/facebook_2504903.png'
import instagram from '../assets/images/instagram_2111463.png'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.png'
import slide3 from '../assets/images/slide3.png'


const HomePage = () => {

    
    return (
        <div className="bgHome">
        <Container className="container-home">

            <div className="container1">
                <div className="text1">EXPLORE THE BEAUTY NATURE</div>
                <div className="text2">VIEW EVERY</div>
                <div className="text2">PLACES THROUGH</div>
                <div className="text3">3D ENVIRONMENT</div> 
                <Link to="/three-dimensional" className="btn btn-explorer btn-outline-dark">LET’S EXPLORE</Link>
                
                <div className="container-sosmed">
                    <img className="sosmed1" src={facebook} alt="facebook" />
                    <img className="sosmed2" src={instagram} alt="instagram" />
                </div>
            </div>
            <div className="container2">
                <img className="slide1" src={slide1} alt="lihat lebih banyak"  />
                <img className="slide2" src={slide2} alt="lihat lebih banyak"  />
                <img className="slide3" src={slide3} alt="lihat lebih banyak"  />
            </div>
        </Container>
        </div>
    )
}

export default HomePage