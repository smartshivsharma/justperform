import React from 'react';
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import classes from './FooterContact.module.css';

import Section from '../ui/Section';
import Cards from '../ui/Cards';



const DUMMY_DATA = [
    {
        id: 'c1',
        image: '../../images/contactIcon-1.png',
        title: 'Book a Demo',
        description: 'See how JustPerform can transform planning, financial close and reporting for you.',
        linkTitle: 'BOOK A DEMO',
        link: '../book-demo',
    },
    {
        id: 'c2',
        image: '../../images/contactIcon-2.png',
        title: 'Start a Trial',
        description: 'Request a trial to get your first value-add results with JustPerform',
        linkTitle: 'START A TRIAL',
        link: '../free-trial',
    },
    {
        id: 'c3',
        image: '../../images/contactIcon-3.png',
        title: 'Contact Us',
        description: 'Ask us all your questions! Get all the answers!',
        linkTitle: 'CONTACT US',
        link: '../contact-us',
    },

];


const FooterContact = () => {

    return (
        <>

            <Section className={classes.footerContact}>
                {/* <section className={classes.footerContact}></section> */}
                <Container>
                    <Row className='align-items-center'>
                        {DUMMY_DATA.map((crd) => {
                            return (
                                <Col md={4} key={crd.id}>
                                    <Cards className='text-center'
                                        key={crd.id}
                                        image={crd.image}
                                        title={crd.title}
                                        description={crd.description}
                                        linkTitle={crd.linkTitle}
                                        link={crd.link}
                                        linkAlign='text-right'
                                    />
                                </Col>
                            )
                        })}  
                    </Row>
                </Container>
            </Section>


        </>

    )
}

export default FooterContact;