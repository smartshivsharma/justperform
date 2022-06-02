import React from 'react';

import { Row, Col } from "react-bootstrap";


function LeftImageDesc(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']} ${props.className}`}>
                <Col lg={6} md={6} className='text-center'>
                    <img src={props.image} className='img-fluid mb-3' />
                </Col>
                <Col lg={5} md={6}>
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className='leadparaBorderd'>{props.description}</p>
                </Col>
            </Row>
        </>
    )
}

export default LeftImageDesc;
