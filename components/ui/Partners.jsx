import React from 'react';
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import classes from './Partners.module.css';



// const DUMMY_DATA = [
//     {
//         id: 'c1',
//         image: '../../images/contactIcon-1.svg',
//         title: 'Book a Demo',
//         description: 'See how JustPerform can transform planning, financial close and reporting for you.',
//         linkTitle: 'BOOK A DEMO',
//         link: '../book-demo',
//     },
//     {
//         id: 'c2',
//         image: '../../images/contactIcon-2.svg',
//         title: 'Start a Trial',
//         description: 'Request a trial to get your first value-add results with JustPerform',
//         linkTitle: 'START A TRIAL',
//         link: '../free-trial',
//     },
//     {
//         id: 'c3',
//         image: '../../images/contactIcon-3.svg',
//         title: 'Contact Us',
//         description: 'Ask us all your questions! Get all the answers!',
//         linkTitle: 'CONTACT US',
//         link: '../contact-us',
//     },

// ];


const Partners = () => {

    return (
        <>

            {/* <Section className={classes.footerContact}>
                <Container>
                    <Row className='align-items-center'>
                        {DUMMY_DATA.map((crd) => {
                            return (
                                <Col md={4}>
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
            </Section> */}


            <Row className={classes.partnersLogo}>
                <Col md={12}>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-1.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-2.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-3.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-4.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-5.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-6.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-7.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-8.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-9.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-10.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-11.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-12.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-13.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-14.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-15.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-16.svg' className='img-fluid' />
                        </li>
                        {/* <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-17.svg' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-18.svg' className='img-fluid' />
                        </li> */}
                    </ul>
                </Col>
            </Row>

        </>

    )
}

export default Partners;