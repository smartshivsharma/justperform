import React from 'react';
import Link from "next/link";

import { Row, Col, Carousel } from "react-bootstrap";


function GartnerCarousel(props) {
  // return <div className={classes.card}>{props.children}</div>;
  return (
    <>

      <Row className='justify-content-center align-items-center mt-4'>
        <Col lg={5}>
          <img src='../../images/imgCustomer.png' className='img-fluid' />
        </Col>
        <Col lg={4}>
          <Carousel variant="dark" indicators={true} controls={false} className='gartnerCarousel'>
            <Carousel.Item>
              <img src='../../images/carousel-gartner1.png' className='img-fluid' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='../../images/carousel-gartner1.png' className='img-fluid' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='../../images/carousel-gartner1.png' className='img-fluid' />
            </Carousel.Item>

          </Carousel>

        </Col>
      </Row>


    </>
  )
}

export default GartnerCarousel;