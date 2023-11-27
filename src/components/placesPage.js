import Carousel from 'react-bootstrap/Carousel';
import places1 from '../assets/images/111.png'
import places2 from '../assets/images/222.png'
import places3 from '../assets/images/333.jpeg'
import places6 from '../assets/images/courosel3.jpg'


const PlacesPage = () => {
        return (
            <Carousel className='carousel'>
              <Carousel.Item >
                <img src={places1} alt="gambar1" className='custom-img'/>
                <Carousel.Caption>
                  <h3>Aston Hills</h3>
 
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src={places2} alt="gambar2"  className='custom-img'/>
                <Carousel.Caption>
                  <h3>Danau Tondano</h3>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src={places3} alt="gambar3" className='custom-img'/>
                <Carousel.Caption>
                  <h3>Danau Linau</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src={places6} alt="gambar6"className='custom-img'/>
                <Carousel.Caption>
                  <h3>Rumah Belanda</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
             </Carousel>
            
          );
        }

export default PlacesPage