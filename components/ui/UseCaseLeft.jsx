import React from 'react';
import Link from "next/link";
import { Row, Col } from "react-bootstrap";


function UseCaseLeft(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-between']} ${props.className}`}>
                <Col md={5} className='text-center'>
                    <img src={props.image} className='img-fluid' />
                </Col>
                <Col md={6}>
                    <h2 className='headingBold'>{props.title}</h2>
                    <p className='leadpara'>{props.description}</p>
                    <p className='learnMore'><Link href={props.buttonLink}><a>{props.buttonText} <i className="las la-arrow-right"></i> </a></Link></p>
                </Col>
            </Row>
        </>
    )
}

export default UseCaseLeft;
