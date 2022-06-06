import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from 'next/head';

import { Container, Row, Col, Button, Card, Accordion } from "react-bootstrap";

import classes from '../../styles/Solutions.module.css';

import InnerBanner from '../../components/ui/InnerBanner';
import FooterContact from '../../components/layout/FooterContact';
import Section from '../../components/ui/Section';
import CustomerSpeak from '../../components/ui/CustomerSpeak';

import LeftImageDesc from '../../components/ui/LeftImageDesc';
import RightImageDesc from '../../components/ui/RightImageDesc';

import UseCaseLeft from '../../components/ui/UseCaseLeft';
import UseCaseRight from '../../components/ui/UseCaseRight';

import Cards from '../../components/ui/Cards';
import ListCards from '../../components/ui/ListCards';

import Partners from '../../components/ui/Partners';

import GartnerCarousel from '../../components/ui/GartnerCarousel';



const Consolidation = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }

    function mailtoHandler() {
        router.push('mailto:contact@justperform.com');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-consolidation.png'
                title='Let your finance users breathe again.'
                description='Get easier, faster, more accurate consolidation for all your internal and external reporting needs.
                Streamline your consolidation process with the purpose-built Consolidation Pro app. Simplify your communication with audit-friendly self-service reporting.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}



            <Section className={`${['sectionBg-White']} ${['pb-0']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading'>Let your finance users breathe again.</h1>
                            <p className='leadpara mt-3'>Get easier, faster, more accurate consolidation for all your internal and external reporting needs.</p>
                            <p className='leadpara'>Streamline your consolidation process with the purpose-built Consolidation Pro app. Simplify your communication with audit-friendly self-service reporting.</p>
                            <Button variant='primary' className='mb-4' onClick={mailtoHandler}>Book a Demo</Button>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-consolidation.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-Gradient']}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={5} md={4}>
                            <img src='../../images/img-ebook.png' className='img-fluid' />
                        </Col>
                        <Col lg={7} md={6}>
                            <h2 className='headingLight text-white'>How to bring speed, accuracy and auditability to your consolidation?</h2>
                            <p className='mt-3 pb-0'>
                                <Button variant='light' className='btnLight'>DOWNLOAD E-BOOK</Button>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={5} md={6}>
                            <h2 className='headingBold'>It&apos;s time to end the inefficiencies and the headaches.</h2>
                            <p className='leadpara mt-3 col-lg-11'>Consolidation has been a struggle for many companies for too long. Laborious merges from multiple entities of data across account structures are often riddled with complexities. Validation, intercompany eliminations, currency conversion, and reporting can be a nightmare for finance users.</p>
                            <p className='leadpara col-lg-11'>Let JustPerform meet these challenges and streamline your consolidation with speed, accuracy, and auditability.</p>
                        </Col>
                        <Col lg={6} md={6}>
                            <img src='../../images/img-infe.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${classes.leadingCompanies} ${['sectionBg-SkyBlue']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12} className='text-center'>
                            <h3 className='headingBold2'>These major players simplify and speed up statutory reporting with JustPerform</h3>
                            {/* <h2 className='headingLight'>These leading companies use JustPerform</h2> */}
                        </Col>
                        <Col lg={12} md={12} className='text-center mt-4'>
                            {/* Partners Component*/}
                            <Partners />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-IrisBlue']} ${['pb-0']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12} className='text-center'>
                            <h3 className='headingBold text-white'>From financial close and management reporting to disclosure management, JustPerform is your single destination.</h3>
                        </Col>
                        <Col lg={10} md={12} className='text-center mt-4'>
                            <img src='../../images/img-financialClose.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']} ${['pb-0']}`}>
                <Container>
                    {/* <RightImageDesc
                        title='Financial Close'
                        description='Let IFRS and Multi-GAAP compliant apps with inbuilt financial intelligence accelerate your financial close.'
                        image='../../images/img-financialClose2.png'
                    />

                    <LeftImageDesc className='mt-5'
                        title='Management Reporting'
                        description='Get a comprehensive view of business performance with no compromise on flexibility in reporting and speed of management decision making.'
                        image='../../images/img-managementReport.png'
                    />

                    <RightImageDesc className='mt-5'
                        title='Disclosure Management'
                        description='Simplify this ‘last mile of finance’ by streamlining the reporting contribution at department level. Eliminate tedious effort in preparing notes to accounts by using a robust, user-friendly disclosure management framework.'
                        image='../../images/img-disclouser.png'
                    /> */}


                    <Row className='mt-5 align-items-center justify-content-between'>
                        <Col lg={6} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold'>Financial Close</h2>
                            <p className='leadparaBorderd'>Let IFRS and Multi-GAAP compliant apps with inbuilt financial intelligence accelerate your financial close.</p>
                            <Button variant='primary' className='mt-3 mb-3'>LEARN MORE</Button>
                        </Col>
                        <Col lg={5} md={6} className='text-center order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-financialClose2.png' className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='align-items-center justify-content-between mt-5'>
                        <Col lg={6} md={6} className='text-center order-2 order-lg-1 order-md-1'>
                            <img src='../../images/img-managementReport.png' className='img-fluid mb-3' />
                        </Col>
                        <Col lg={5} md={6} className='order-1 order-lg-2 order-md-2'>
                            <h2 className='headingBold'>Management Reporting</h2>
                            <p className='leadparaBorderd'>Get a comprehensive view of business performance with no compromise on flexibility in reporting and speed of management decision making.</p>
                            <Button variant='primary' className='mt-3 mb-3'>LEARN MORE</Button>
                        </Col>
                    </Row>

                    <Row className='mt-5 align-items-center justify-content-between mt-5'>
                        <Col lg={6} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold'>Disclosure Management</h2>
                            <p className='leadparaBorderd'>Simplify this &apos;last mile of finance&apos; by streamlining the reporting contribution at department level. Eliminate tedious effort in preparing notes to accounts by using a robust, user-friendly disclosure management framework.</p>
                            <Button variant='primary' className='mt-3 mb-3'>LEARN MORE</Button>
                        </Col>
                        <Col lg={5} md={6} className='text-center order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-disclouser.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>

                </Container>
            </Section>





            <Section className={`${['sectionBg-Gradient']} ${['mt-5']}`}>
                <Container>
                    {/** CustomerSpeak Component */}
                    <CustomerSpeak />

                </Container>
            </Section>




            <Section className={`${['sectionBg-Gray2']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12} md={12} className='text-center'>
                            <h3 className='headingBold'>Consolidate with new levels of speed, efficiency, and confidence </h3>
                        </Col>

                    </Row>
                    <Row className='justify-content-between align-items-start mt-4 mb-4'>
                        <Col lg={7} md={12} className='order-1 order-lg-1 order-md-1'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <img src='../../images/icon-accord1.svg' className='img-fluid' /> Meet all your requirements in one go
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Handle data coming from multiple entities, systems, and locations with ease. Leverage JustPerform&apos;s Visual Data Flow layer to easily collate and enrich data as needed for consolidation.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <img src='../../images/icon-accord2.svg' className='img-fluid' /> Accordion Effortlessly collect, prepare, and enrich all your data
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Handle data coming from multiple entities, systems, and locations with ease. Leverage JustPerform&apos;s Visual Data Flow layer to easily collate and enrich data as needed for consolidation.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <img src='../../images/icon-accord3.svg' className='img-fluid' />Automate all your adjustments in your consolidation
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Handle data coming from multiple entities, systems, and locations with ease. Leverage JustPerform&apos;s Visual Data Flow layer to easily collate and enrich data as needed for consolidation.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <img src='../../images/icon-accord4.svg' className='img-fluid' /> Move to accurate, audit-friendly results
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Handle data coming from multiple entities, systems, and locations with ease. Leverage JustPerform&apos;s Visual Data Flow layer to easily collate and enrich data as needed for consolidation.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col lg={4} md={12} className='text-center order-2 order-lg-2 order-md-2 mt-4'>
                            <img src='../../images/img-accord.png' className='img-fluid mt-4 col-lg-12 col-md-6' />
                        </Col>
                    </Row>
                </Container>
            </Section>





            {/* Customer Love Section */}
            <Section className={`${classes.customers} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12} className='text-center'>
                            <h2 className='headingBold'>Our customers love JustPerform!</h2>
                            <p className='leadpara'>Our customers rate us highly on Gartner Peer Insights and we reciprocate. Through constant integration of their feedback, we continue to offer them the most user-centric business performance management platform ever.</p>
                            {/* <p>
                                <img src='../../images/imgCustomer.jpg' className='img-fluid' />
                            </p> */}
                        </Col>
                    </Row>


                    <GartnerCarousel />

                </Container>
            </Section>




        </>

    )

}

export default Consolidation;