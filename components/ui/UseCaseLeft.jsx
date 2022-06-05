import React from 'react';
import Link from "next/link";
import { Row, Col } from "react-bootstrap";


function UseCaseLeft(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-start']} ${props.className}`}>
                <Col lg={4} md={6} className='text-center mb-3 order-2 order-lg-2 order-md-1'>
                    <img src={props.image} className='img-fluid' />
                </Col>
                <Col lg={6} md={6} className='offset-lg-1 order-1 order-lg-2 order-md-2'>
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className='leadpara col-lg-11'>{props.description}</p>
                    <p className='learnMore'><Link href={props.buttonLink}><a>{props.buttonText} <i className="las la-arrow-right"></i> </a></Link></p>
                </Col>
            </Row>
        </>
    )
}

export default UseCaseLeft;
