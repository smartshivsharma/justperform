import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from 'next/head';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import classes from '../../styles/Services.module.css';

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

import PowerCardLeft from '../../components/ui/PowerCardLeft';
import PowerCardRight from '../../components/ui/PowerCardRight';

import Partners from '../../components/ui/Partners';



const Services = () => {


    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }

    return (
        <>




            {/* <InnerBanner className={`${['sectionBg-SkyBlue']}`}
                image='../../images/banner-company.png'
                title='We empower you for business performance'
                description='You merit real solutions for business performance management from a company that constantly strives to simplify business users’ lives and empower organizations. That’s JustPerform. Who else!'
            /> */}


            <Section className={`${['sectionBg-SkyBlue2']} ${classes.serviceBanner}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={12} className="order-2 order-lg-1">
                            <h1 className='bannerHeading'>Business value via co-creation & co-delivery </h1>
                            <p className='leadpara'>With our agile implementation methodology, expert team, and user focused trainings, we go beyond just providing you a service. We align with your business goals to maximise your return on investment in JustPerform.</p>
                        </Col>

                        <Col lg={7} md={12} className="order-1 order-lg-2">
                            <img src='../../images/banner-services.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col md={12}>
                            <h2 className='headingLight text-white text-center'>We support you in catalysing and accelerating your performance management results. </h2>
                        </Col>
                    </Row>
                </Container>
            </Section>


            <Section className={`${['sectionBg-IrisBlue']}`}>
                <Container>
                    <Row className='justify-content-center text-white text-center'>
                        <Col lg={10} md={12}>
                            <h2 className='headingBold'>Your fast track to implementation success </h2>
                            <p className='leadpara'>Lack of transparency, complicated configurations, undocumented requirements, and delays are all too common in the industry. They can destroy the effectiveness of a solution. But with an expert EPM team and the unique JustPerform way, you can eliminate all the roadblocks and ensure smooth and successful implementation.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>


            <section className={classes.fullBanner}>
                <img src='../../images/banner-services2.jpg' className='img-fluid' />
            </section>


            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Leverage, learn, and succeed</h2>
                            <p className='leadpara'>Power up with JustPerform resources and skills </p>
                        </Col>

                    </Row>
                    <Row className='justify-content-between mt-5'>
                        <Col lg={6} md={6}>
                            <h2 className='headingBold'>Leverage our knowledgeable customer success team</h2>
                            <p className='leadpara'>Tap into the vast expertise of our customer success owners. With cross-industry process knowledge and complete product know-how, we are here for you. </p>
                            <p className='leadpara'>Meet all your requirements with an expertly guided and implemented solution. </p>
                        </Col>
                        <Col lg={5} md={6}>
                            <img src='../../images/img-leverage.svg' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={10} md={12}>
                            <h2 className='headingBold'>Co-create your centre of excellence</h2>
                            <p className='leadpara'>Nurture your self-sufficiency with enablement from our expert teams. With our vast experience in EPM, we help you build your centre of excellence as part of your implementation journey.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center text-center mt-4'>
                        <Col lg={6} md={12}>
                            <img src='../../images/img-exellence.png' className='img-fluid' />
                        </Col>
                    </Row>
                    <Row className='justify-content-center text-center mt-4'>
                        <Col lg={8} md={12}>
                            <p className='leadpara'>
                                <b>Make best use of your internal resources, eliminate dependencies, and leverage opportunities for innovation in your EPM initiatives.</b>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between mt-5'>
                        <Col lg={6} md={6}>
                            <h2 className='headingBold'>Reap the benefits of agile implementation</h2>
                            <p className='leadpara'>Adopt the JustPerform way in your implementation. Choose this agile, flexible implementation approach based on industry best practices.</p>
                            <p className='leadpara'>We help you uncover any bottlenecks in your existing processes, develop the processes you need, and set up your solution quickly and easily.</p>
                        </Col>
                        <Col lg={5} md={6}>
                            <img src='../../images/img-reap.svg' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue2']} ${['pt-0']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center mt-5'>
                        <Col lg={5} md={6}>
                            <img src='../../images/img-adoption.png' className='img-fluid' />
                        </Col>
                        <Col lg={6} md={6}>
                            <h2 className='headingBold'>Accelerate user adoption</h2>
                            <p className='leadpara'>Empower users with JustPerform learning paths to platform mastery. Our well-structured, carefully crafted learning programs guide users to comprehensive understanding of all the relevant functionalities.</p>
                            <p className='leadpara'>Let our user-centric training take your users smoothly from newbie to JustPerform pro.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gradient']}`}>
                <Container>
                    {/** CustomerSpeak Component */}
                    <CustomerSpeak />

                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={12} md={12}>
                            <h2 className='headingBold text-center'>Professional services to power your EPM success </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Card className={classes.card}>
                                <Card.Body>
                                    <Row>
                                        <Col lg={3} md={6}>
                                            <p><img src='../../images/icon-collaborative.svg' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Collaborative workshops</p>
                                            <p className={classes.cardSubTitle}>Set up goals, agree on business outcomes, and capture all your requirements with our dedicated customer success owners.</p>
                                        </Col>
                                        <Col lg={3} md={6}>
                                            <p><img src='../../images/icon-streamlined.svg' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Streamlined processes</p>
                                            <p className={classes.cardSubTitle}>Our customer success owners will apply their process expertise to help you streamline your processes with the visual and intuitive user interface. </p>
                                        </Col>
                                        <Col lg={3} md={6}>
                                            <p><img src='../../images/icon-seamless.svg' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Seamless modelling</p>
                                            <p className={classes.cardSubTitle}>We will provide expert guidance for your models, drivers, and business rules, based on your requirements and in the most user-friendly experience ever.</p>
                                        </Col>
                                        <Col lg={3} md={6}>
                                            <p><img src='../../images/icon-effortless.svg' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Effortless data transformation</p>
                                            <p className={classes.cardSubTitle}>Our consultants will help you untangle even the most complex data to connect, collect, and transform it with integrations to over 80 source systems.</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Section>






            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Enabling you at every step</h2>
                        </Col>
                    </Row>

                    {/* <PowerCardLeft
                        image='../../images/img-recog.png'
                        title='Recognition from top analysts'
                        description='BPM Partners, a vendor neutral top research & consulting EPM firm recognised JustPerform as a highly rated platform in customer satisfaction ratings.'
                    /> */}


                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-recog.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid}>
                                                <Card.Title className={classes.powerCardTitle}>Reliable, effective support</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Our continuous support ensures your performance management journey is smooth and satisfying.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    With the help of expert customer success owners, inbuilt incident management, and self-help manuals, you can perform at speed.
                                                </Card.Text>
                                            </div>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>


                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-5']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCardRight}>
                                <Card.Body className={classes.powerCardRightBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={7} md={12} className={classes.powerCardRightDetails}>
                                            <div className={classes.vMidRight}>
                                                <Card.Title className={classes.powerCardRightTitle}>Stay ahead and secure with premium support</Card.Title>
                                                <Card.Text className={classes.powerCardRightText}>
                                                    JustPerform premium support provides real-time technical assistance, accelerated problem resolution, and prioritized product updates to keep your solution running at its best.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardRightText}>
                                                    Optimize your performance and enhance your processes with our spot-on product know-how and process expertise.
                                                </Card.Text>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} className={`${classes.powerCardRightImage}`}>
                                            <img src='../../images/img-recog.png' className={`${['img-fluid']}`} />
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Container>
            </Section>




        </>

    )
}

export default Services;