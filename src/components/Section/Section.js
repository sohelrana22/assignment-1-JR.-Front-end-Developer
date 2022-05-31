import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import silder1 from './../../images/slider1.avif';
import silder2 from './../../images/slider2.avif';
import silder3 from './../../images/slider3.avif';
import silder4 from './../../images/slider4.avif';

const Section = () => {
    return (
        <div>
           <Container>
           <Carousel>
  <Carousel.Item>
   <div>
   <img
      className="d-block w-50"
      src={silder1}
      alt="New slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </div>
  </Carousel.Item>
  <Carousel.Item>
   <div>
   <img
      className="d-block w-50"
      src={silder2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={silder3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={silder4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </Container>
        </div>
    );
};

export default Section;