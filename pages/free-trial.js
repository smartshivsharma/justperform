import React from 'react';
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

import Section from '../components/ui/Section';

import classes from '../styles/Terms.module.css';




const FreeTrial = () => {

    return (
        <>
            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='mt-4 mb-3'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Free Trial</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>

    )
}

export default FreeTrial;