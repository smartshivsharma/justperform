import React from 'react';

import { Row, Col } from "react-bootstrap";


function RightImageDesc(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']}  ${props.className}`}>
                <Col lg={5} md={6} className="order-2 order-md-2">
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className={`${'leadparaBorderd'}`}>{props.description}</p>
                    {/* <p className={`${'leadparaBorderd'} ${props.className}`}>{props.description}</p> */}
                </Col>
                <Col lg={6} md={6} className="text-center order-1 order-md-2">
                    <img src={props.image} className='img-fluid mb-3' />
                </Col>
            </Row>
        </>
    )
}

export default RightImageDesc;