import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
// import { Container } from './styles';

function CarouselComponent() {
  return (
      <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.ibxk.com.br/2012/6/materias/2533620123620.jpg?w=1120&h=420&mode=crop&scale=both"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.ibxk.com.br/2016/02/24/24120655953583.jpg?w=1120&h=420&mode=crop&scale=both"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
  );
}

export default CarouselComponent;