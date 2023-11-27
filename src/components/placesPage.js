import Carousel from 'react-bootstrap/Carousel';
import places1 from '../assets/images/slide1.png'
import places2 from '../assets/images/slide2.png'
import places3 from '../assets/images/slide3.png'
import places4 from '../assets/images/courosel1.jpg'
import places5 from '../assets/images/courosel2.jpg'
import places6 from '../assets/images/courosel3.jpg'


const PlacesPage = () => {
        return (
            <Carousel>
              <Carousel.Item interval={1000}>
                <img src={places1} alt="gambar1"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={500}>
              <img src={places2} alt="gambar2"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src={places3} alt="gambar3"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }

export default PlacesPage