import React from 'react';

import { Row, Col } from "react-bootstrap";


function LeftImageDesc(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']} ${props.className}`}>
                <Col md={5}>
                    <img src={props.image} className='img-fluid' />
                </Col>
                <Col md={6}>
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className='leadparaBorderd'>{props.description}</p>
                </Col>
            </Row>
        </>
    )
}

export default LeftImageDesc;
