import React from 'react';
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import classes from './Partners.module.css';



// const DUMMY_DATA = [
//     {
//         id: 'c1',
//         image: '../../images/contactIcon-1.png',
//         title: 'Book a Demo',
//         description: 'See how JustPerform can transform planning, financial close and reporting for you.',
//         linkTitle: 'BOOK A DEMO',
//         link: '../book-demo',
//     },
//     {
//         id: 'c2',
//         image: '../../images/contactIcon-2.png',
//         title: 'Start a Trial',
//         description: 'Request a trial to get your first value-add results with JustPerform',
//         linkTitle: 'START A TRIAL',
//         link: '../free-trial',
//     },
//     {
//         id: 'c3',
//         image: '../../images/contactIcon-3.png',
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
                            <img src='../../images/SCG.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Vinhomes.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/AEM.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Banpu.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/FarrerPark.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Intuitive.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/SUSS.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/PanPacific.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Vingroup.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/ComfortDelgro.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Singtel.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/NCS.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/UOLGroup.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Sembcorp.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/Goodpack.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/RegalSprings.png' className='img-fluid' />
                        </li>
                        {/* <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-17.png' className='img-fluid' />
                        </li>
                        <li className='list-inline-item'>
                            <img src='../../images/partnerLogo-18.png' className='img-fluid' />
                        </li> */}
                    </ul>
                </Col>
            </Row>

        </>

    )
}

export default Partners;