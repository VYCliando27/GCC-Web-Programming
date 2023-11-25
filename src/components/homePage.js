import { Container, Button } from "react-bootstrap"

import facebook from '../assets/images/facebook_2504903.png'
import instagram from '../assets/images/instagram_2111463.png'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.png'
import slide3 from '../assets/images/slide3.png'
import btnKiri from '../assets/images/kiri.png'
import btnKanan from '../assets/images/kanan.png'

const HomePage = () => {

    
    return (
        <div className="bgHome">
        <Container className="container-home">

            <div className="container1">
                <div className="text1">EXPLORE THE BEAUTY NATURE</div>
                <div className="text2">VIEW EVERY</div>
                <div className="text2">PLACES THROUGH</div>
                <div className="text3">3D ENVIRONMENT</div> 
                <Button href="https://www.google.com/maps/place/Tondano,+Kembuan,+Kec.+Tondano+Utara,+Kabupaten+Minahasa,+Sulawesi+Utara/@1.3026286,124.8920274,14.1z/data=!4m6!3m5!1s0x32871464bf9b47e7:0x4fdf0d5b34b716e5!8m2!3d1.30198!4d124.913399!16s%2Fm%2F0105jzvc?entry=ttu" className="btn-exploler" variant="outline-dark">LET’S EXPLORE</Button>{''}
                
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
        <div className="btn-home">
            <img className="btnKiri" src={btnKiri} alt="geser ke kiri" />
            <img className="btnKanan" src={btnKanan} alt="geser ke kanan"  />
        </div>
        </div>
    )
}

export default HomePage