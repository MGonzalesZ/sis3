import Carousel from 'react-bootstrap/Carousel';
import img1 from "./img/AdobeStock_211770395-1080x675.jpeg";

export function Carruselimg() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          width={'40%'}
          height={360}
          alt="900x500"
          src={img1}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={'40%'}
          height={360}
          alt="900x500"
          src={img1}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={'40%'}
          height={360}
          alt="900x500"
          src={img1}
        ></img>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={'40%'}
          height={360}
          alt="900x500"
          src={img1}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}
