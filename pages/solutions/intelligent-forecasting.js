import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from 'next/head';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import classes from '../../styles/Solutions.module.css';

import InnerBanner from '../../components/ui/InnerBanner';
import FooterContact from '../../components/layout/FooterContact';
import Section from '../../components/ui/Section';
import CustomerSpeak from '../../components/ui/CustomerSpeak';

// import LeftImageDesc from '../../components/ui/LeftImageDesc';
// import RightImageDesc from '../../components/ui/RightImageDesc';

import UseCaseLeft from '../../components/ui/UseCaseLeft';
import UseCaseRight from '../../components/ui/UseCaseRight';

import Cards from '../../components/ui/Cards';
import ListCards from '../../components/ui/ListCards';

import Partners from '../../components/ui/Partners';


import GartnerCarousel from '../../components/ui/GartnerCarousel';



const IntelligentForecasting = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Intelligent Forecasting'
                description='Bring collaboration to your enterprise planning. Build business agility and resilience into your organisation by connecting your strategic, financial, and operational plans. Outperform each day as your business and the world changes.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}



            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading col-lg-10'>Drive accurate decisions with intelligent forecasts</h1>
                            <p className='leadpara'>Bring speed, accuracy, and agility to your forecasts by leveraging data with JustPerform&apos;s inbuilt artificial intelligence (AI) and machine learning (ML) algorithms.</p>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-intelligentForecasting.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={2} md={4}>
                            <img src='../../images/img-salesChart.svg' className='img-fluid' />
                        </Col>
                        <Col lg={6} md={8}>
                            <h2 className='headingLight text-white'>According to Gartner</h2>
                            <p className='leadpara text-white'>56% of organisations have already adopted Artificial Intelligence*</p>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={6} md={6}>
                            <h2 className='headingBold'>JustPerform&apos;s ingredients for success in intelligent forecasting</h2>
                            <p className='leadpara mt-4 col-lg-11'>From traditional manual input and driver-based methods to predictive approaches, forecasting techniques have been evolving continuously.</p>
                            <p className='leadpara col-lg-11'>Traditional forecasts can be time-consuming yet remain ineffective, they may also be influenced by assumptions based on human biases.</p>
                            <p className='leadpara col-lg-11'>TradiForecasting for your organisation needs to be in sync with reality, nimble, and aligned for success in the modern world.</p>
                        </Col>
                        <Col lg={6} md={6}>
                            <img src='../../images/img-powefulAI.svg' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-IrisBlue']}`}>
                <Container>
                    <Row className='justify-content-center text-center text-white'>
                        <Col lg={11} md={12}>
                            <h2 className='headingBold'>Remove biases and improve granularity, agility, and robustness by building scenario-based data-driven forecasts</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                   
                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12}>
                                            <div className={`${classes.powerCardImage}`}>
                                                <img src='../../images/img-cardinte.png' className={`${['img-fluid']}`} />
                                            </div>
                                        </Col>
                                        <Col lg={7} md={12}>
                                            <div className={`${classes.powerCardDetails} ${classes.forecastingCard}`}>
                                                <div className={classes.vMid}>
                                                    <Card.Title className={`${classes.powerCardTitle} ${['col-lg-10']}`}>Intelligent Forecasting with JustPerform</Card.Title>
                                                    <Card.Text className={classes.powerCardText}>
                                                        <ul className={classes.list}>
                                                            <li>Take bias out of assumptions driving forecasts</li>
                                                            <li>Leverage insights from both internal and external data</li>
                                                            <li>Remove manual intervention with the help of predictive modelling driven by AI and ML </li>
                                                            <li>Improve accuracy and confidence in your budgets and forecasts</li>
                                                            <li>Rapidly change assumptions to see the impact on forecasts and scenarios</li>
                                                            <li>Make faster, timelier, and better-informed business decisions</li>
                                                        </ul>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>



                </Container>
            </Section>







            <Section className={`${classes.customers} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8} md={12} className='text-center'>
                            <h2 className='headingBold2'>Better Forecasting, Driven by Data, Intelligence, and Collaboration</h2>
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col lg={12} md={12}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col lg={3} md={4} className="order-2 order-lg-1 order-md-1">
                                            <img src='../../images/img-kickstart.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={8} className="order-1 order-lg-2 order-md-2">
                                            <h2 className='headingBold'>Kick start with built-in intelligence</h2>
                                            <p className='leadpara'>Move beyond driver-based forecasting to predictive forecasting with intelligent algorithms to avoid human bias.</p>
                                            <p className='leadpara'><b>Start with:</b></p>
                                            <Card.Text className={classes.powerCardText}>
                                                <ul className={classes.list}>
                                                    <li>JustPerformclassNames built-in AI and ML business rule library, or</li>
                                                    <li>Seamless integration with third party AI and ML platforms if you have existing investments</li>
                                                </ul>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={12} md={12} className='mt-5'>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col lg={3} md={4} className="order-2 order-lg-1 order-md-1">
                                            <img src='../../images/img-model.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={8} className="order-1 order-lg-2 order-md-2">
                                            <h2 className='headingBold'>Model with speed </h2>
                                            <p className='leadpara'>An accurate forecast requires high volume, variety, and velocity of internal and external data. Include as many data points and dimensions as you need in your models with no compromise on speed and accuracy. </p>
                                            <p className='leadpara'><b>Build granular and accurate forecasts with:</b></p>
                                            <Card.Text className={classes.powerCardText}>
                                                <ul className={classes.list}>
                                                    <li>AI-assisted user-friendly modelling to get the best out of relational and multi-dimensional capabilities</li>
                                                    <li>A single source of truth by easily converting all your spreadsheets into JustPerform models</li>
                                                </ul>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={12} md={12} className='mt-5'>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='justify-content-center align-items-center'>
                                        <Col lg={3} md={4} className="order-2 order-lg-1 order-md-1">
                                            <img src='../../images/img-collaborate.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={8} className="order-1 order-lg-2 order-md-2">
                                            <h2 className='headingBold'>Collaborate and coordinate in harmony</h2>
                                            <p className='leadpara'>A critical factor in developing successful forecasts is the engagement of all relevant stakeholders in your forecasting. Involve the right users with the right insights at the right time to drive agile forecasting with JustPerform. </p>
                                            <p className='leadpara'><b>Get the benefit of cross-functional collaboration with:</b></p>
                                            <Card.Text className={classes.powerCardText}>
                                                <ul className={classes.list}>
                                                    <li>Fine grain authorisations and personalised views for users of all departments</li>
                                                    <li>Office 365 connector to put users at ease with a familiar Excel interface for their forecasting </li>
                                                    <li>Office 365 connector to put users at ease with a familiar Excel interface for their forecasting </li>
                                                </ul>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>







            {/* Customer Love Section */}
            <Section className={`${classes.customers} ${['sectionBg-SkyBlue2']}`}>
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

export default IntelligentForecasting;