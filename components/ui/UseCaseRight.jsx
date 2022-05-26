import React from 'react';
import Link from "next/link";

import { Row, Col } from "react-bootstrap";


function UseCaseRight(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']}  ${props.className}`}>
                <Col md={6} className="order-2 order-md-2">
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className={`${'leadpara'}`}>{props.description}</p>
                    <p className='learnMore'><Link href={props.buttonLink}><a>{props.buttonText} <i className="las la-arrow-right"></i> </a></Link></p>
                </Col>
                <Col md={5} className="text-center order-1 order-md-2">
                    <img src={props.image} className='img-fluid' />
                </Col>
            </Row>
        </>
    )
}

export default UseCaseRight;