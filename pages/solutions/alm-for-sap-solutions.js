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



const AlmSapSolutions = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='ALM for SAP Solutions​'
                description='Bring collaboration to your enterprise planning. Build business agility and resilience into your organisation by connecting your strategic, financial, and operational plans. Outperform each day as your business and the world changes.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading  col-lg-10'>Got SAP EPM? Safeguard your return on investment</h1>
                            <p className='leadpara  col-lg-10'>If you already made an SAP EPM Solution Suite investment for your business performance management then read on.</p>
                            <p className='leadpara  col-lg-11'>Now, you can optimise your SAP software, simplify its maintenance, and safeguard your ROI to end-of-life. All thanks to JustPerform embedded for SAP EPM.</p>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-alm.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10} md={12}>
                            <h2 className='headingLight text-white text-center'>74% of finance executives want to streamline their processes</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6}  className="order-2 order-lg-1 order-md-1">
                            <img src='../../images/img-legacy.png' className='img-fluid mb-3' />
                        </Col>
                        <Col lg={6} md={6}  className="order-1 order-lg-2 order-md-2">
                            <h2 className='headingBold col-lg-10'>Legacy solutions built decades ago can slow your business down. Why?</h2>
                            <p className='leadpara mt-4 col-lg-10' style={{ fontSize: '21px' }}><b>Because of their outdated technology, inflexibility, and fragmented approach to performance management.</b></p>
                            <p className='leadpara col-lg-11'>A dearth of EPM experts, lack of process knowledge, and configuration-intensive deployment can compromise goals of building effective, streamlined processes.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-IrisBlue']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center text-white'>
                        <Col lg={6} md={6}>
                            <h2 className='headingBold2'>Health Check and Process Improvement with embedded for SAP EPM</h2>
                            <p className='leadpara mt-4'>Let JustPerform optimise your SAP solutions with regular automated assessment, seamless enhancement, and accelerated deployment for improved end-to-end application lifecycle management.</p>
                        </Col>
                        <Col lg={5} md={6}>
                            <img src='../../images/img-healthcheck.svg' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={12} md={12}>
                            <h2 className='headingBold2 text-center'>End-to-End Management of your SAP EPM solutions</h2>
                        </Col>
                    </Row>

                    
                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12}>
                                            <div className={`${classes.powerCardImage}`}>
                                                <img src='../../images/img-assess.png' className={`${['img-fluid']}`} />
                                            </div>
                                        </Col>
                                        <Col lg={7} md={12}>
                                            <div className={classes.powerCardDetails}>
                                                <div className={classes.vMid}>
                                                    <Card.Title className={classes.powerCardTitle}>Assess and continuously monitor your systems</Card.Title>
                                                    <Card.Text className={classes.powerCardText}>
                                                        Don&apos;t let inefficient processes and non-optimised systems hold you back. Analyse risks and detect problems pro-actively with JustPerform&apos;s automated assessment of your SAP EPM systems.
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>


                    <Row className='mt-3'>
                        <Col lg={6} md={12}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={2} className='text-center'>
                                            <img src='../../images/icon-assess1.svg' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col md={10}>
                                            <Card.Text>
                                                Easy automated system discovery with the drag and drop option for your SAP environments and zero manual intervention
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={12}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={2} className='text-center'>
                                            <img src='../../images/icon-assess2.svg' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col md={10}>
                                            <Card.Text>
                                                Actionable insights on all your models, dimensions, reports, and all other components, with ML and AI assisted assessment
                                            </Card.Text>
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
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={7} md={6}>
                            <h2 className='bannerHeading'>Visually enhance and build your EPM processes</h2>
                            <p className='leadpara mt-4 col-lg-11'>SAP EPM solutions do not include process definition, which is typically done in workshops outside the platform. Now, you can enhance and build your processes in JustPerform with the knowledge packs, and guided user experience.</p>
                        </Col>
                        <Col lg={4} md={6} className='text-center'>
                            <img src='../../images/img-visuallyInhance.png' className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Leverage the built-in knowledge apps to refine your existing processes or build new ones.</p>
                        </Col>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Shorten the refinement and build cycles by adopting pre-built scenarios with the flexibility to alter them as per your need.</p>
                        </Col>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Experience collaborative and design-driven process management with guided workflows, and process flows to define and refine processes visually.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={11} md={12}>
                            <h2 className='bannerHeading'>Bring transparency to your deployment</h2>
                            <p className='leadpara mt-4'>Trying to move your business processes into a technical design that works can be overwhelming. But you don’t have to struggle with obscure coding and configuration. Instead, focus on refining and defining your processes at the business level and let JustPerform take care of their technical deployment.</p>
                        </Col>
                        <Col lg={8} md={12}>
                            <img src='../../images/img-bt.png' className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Let the autobuild engine accelerate coding and configuration by translating processes into code with just a click.</p>
                        </Col>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Automate deployment with tight integrations to SAP EPM solutions</p>
                        </Col>
                        <Col md={4}>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>Smooth and speed up your testing with inbuilt incident management to track, monitor and resolve incidents.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>

                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCardRight}>
                                <Card.Body className={classes.powerCardRightBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={7} md={12} className={`${['order-2 order-lg-1 order-md-2']}`}>
                                            <div className={classes.powerCardRightDetails}>
                                                <div className={classes.vMidRight}>
                                                    <Card.Title className={classes.powerCardRightTitle}>Take control and act in real time</Card.Title>
                                                    <Card.Text className={classes.powerCardRightText}>
                                                        Changes to your processes are inevitable, especially in this fast-moving business world. Ensure business continuity by implementing business process improvements at speed and with ease.
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} className={`${['order-1 order-lg-2 order-md-1']}`}>
                                            <div className={classes.powerCardRightImage}>
                                                <img src='../../images/img-takecontrol.png' className={`${['img-fluid']}`} />
                                            </div>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>


                    <Row className='mt-3'>
                        <Col lg={6} md={12}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={2} className='text-center'>
                                            <img src='../../images/icon-takecontrol1.svg' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col md={10}>
                                            <Card.Text>
                                                Decrease change-related outages with an autobuild engine that deploys changes directly to your SAP systems
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={12}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={2} className='text-center'>
                                            <img src='../../images/icon-takecontrol2.svg' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col md={10}>
                                            <Card.Text>
                                                Keep track of all your changes from process inception to completion with robust event tracking capabilities.
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




            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg md={12}>
                            <h2 className='bannerHeading text-center'>
                                A more unified system is what 55% of finance leaders are looking for, to empower their finance team.
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gradient']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center text-white'>
                        <Col lg={5} md={6} className='order-2 order-lg-1 order-md-1'>
                            <h2 className='bannerHeading col-lg-10'>It&apos;s time to look beyond SAP BPC</h2>
                            <p className='leadpara mt-4 col-lg-11'>SAP BPC maintenance will come to an end very soon. The only way out for SAP-based EPM will be a combination of multiple solutions.</p>
                            <p className='leadpara col-lg-11'>With a process-first approach and automated migration, JustPerform, the unified solution, is the smart and most effective choice for your business performance management.</p>
                        </Col>
                        <Col lg={6} md={6} className='order-1 order-lg-2 order-md-2'>
                            <img src='../../images/img-sapbpc.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={12} md={12}>
                            <h2 className='bannerHeading'>Now is the time to migrate to JustPerform. How?</h2>
                            <Button variant='primary' className='mt-4'>CHECK FREE MIGRATION ELIGIBILITY</Button>
                        </Col>

                    </Row>
                </Container>
            </Section>








        </>

    )

}

export default AlmSapSolutions;