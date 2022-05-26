import React from 'react';
import { Row, Col, Container } from "react-bootstrap";



const BookDemo = () => {

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={12}>
                        <h2>Book a Demo</h2>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default BookDemo;