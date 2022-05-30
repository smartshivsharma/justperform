import React, { useState } from 'react';
import {Container, Row, Col, Button } from "react-bootstrap";
import classes from './InnerBanner.module.css';
import Section from './Section';

const InnerBanner = (props) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <Section className={`${classes.innerBanner} ${['sectionBg-White']} ${props.className}`}>
                <Container>
                    <Row className='justify-content-between align-items-center order-2 order-lg-1 order-md-1'>
                        <Col lg={6} md={6}>
                            <h1 className='bannerHeading'>{props.title}</h1>
                            <p className='leadpara'>{props.description}</p>
                            
                            <p><Button variant="primary" onClick={props.onClick}>{props.buttonText}</Button></p>
                        </Col>

                        <Col lg={6} md={6} className='text-center order-1 order-lg-2 order-md-2'>
                            <img src={props.image} className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default InnerBanner;