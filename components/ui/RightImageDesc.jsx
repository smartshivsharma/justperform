import React from 'react';

import { Row, Col } from "react-bootstrap";


function RightImageDesc(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']}  ${props.className}`}>
                <Col md={6} className="order-2 order-md-2">
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className={`${'leadparaBorderd'}`}>{props.description}</p>
                    {/* <p className={`${'leadparaBorderd'} ${props.className}`}>{props.description}</p> */}
                </Col>
                <Col md={5} className="order-1 order-md-2">
                    <img src={props.image} className='img-fluid' />
                </Col>
            </Row>
        </>
    )
}

export default RightImageDesc;