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


const ProfitabilityAnalysis = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Profitability Analysis'
                description='Bring collaboration to your enterprise planning. Build business agility and resilience into your organisation by connecting your strategic, financial, and operational plans. Outperform each day as your business and the world changes.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={6} md={6} className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading'>Keep score on profitability like never before</h1>
                            <p className='leadpara'>Perform detailed analysis of your profitability measures across products, projects, customers, and channels. Act quickly with accurate insights for immediate improvement.</p>
                            <Button variant='primary' onClick={buttonHandler}>Book a Demo</Button>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-profitability.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='justify-content-center text-center text-white'>
                        <Col lg={12} md={12}>
                            <h2 className='headingLight'>Hit new profitability highs with in-depth analysis and informed decisions</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-recog.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid1}>
                                                <Card.Title className={classes.powerCardTitle}>Optimizing profitability is more important than ever in this fast-paced business world.</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    However, understanding key profitability drivers can be tough. Other challenges include allocating resources correctly to each product/product group and reducing overheads and costs. Without smarter solutions, manual data exports, consolidation, and presentation for analysis and allocation are all tedious and time-consuming.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    Get quick, efficient results with granular insights and right automation with JustPerform.
                                                </Card.Text>
                                            </div>

                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Section>






            <Section className={`${['sectionBg-IrisBlue']}`}>
                <Container>
                    <Row className='justify-content-center text-center text-white'>
                        <Col lg={11} md={12}>
                            <h2 className='headingBold'>Bringing simplicity and transparency to your profitability analysis.</h2>
                            <p className='leadpara'>Use the insights, granularity, and automation in the platform to get results quickly and efficiently.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={6} md={6}>
                            <h2 className='bannerHeading'>Improve accuracy with transparent allocations, easy driver definition</h2>
                            <p className='leadpara mt-4'>Allocating resources to profit and cost centres can be challenging, especially if you&apos;re battling with unknown drivers and baffling formulae.</p>
                            <p className='leadpara mt-4'>Use JustPerform instead. JustPerform lets you easily define underlying drivers and allocate necessary costs without any complicated formulae or coding.</p>
                        </Col>
                        <Col lg={6} md={6} className='text-center'>
                            <img src='../../images/img-visuallyInhance.svg' className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={3}>
                            <p className='leadpara'><b>Value Driver Trees</b></p>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>enable you to visually define and maintain all your resources and profitability drivers in one intuitive, easy-to-update experience</p>
                        </Col>
                        <Col md={3}>
                            <p className='leadpara'><b>Built-in Allocation Rules </b></p>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>let you simplify cost and other allocations without needing to code or write intricate formulae</p>
                        </Col>
                        <Col md={3}>
                            <p className='leadpara'><b>Validation Reports </b></p>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>at each step allow you to confirm allocations of costs and profits in the right way and in the right direction</p>
                        </Col>
                        <Col md={3}>
                            <p className='leadpara'><b>Flexible Extensible Models</b></p>
                            <p className={`${['leadparaBorderd']} ${classes.leaBorderText}`}>are easy to change and extend to mirror new growth and diversity in your business</p>
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={10} md={12}>
                            <h2 className='bannerHeading'>Perform in-depth analysis for actionable insights</h2>
                            <p className='leadpara mt-4'>Multiple source systems without auditability can lead to a broken allocation process and compromised analysis. </p>
                            <p className='leadpara'>JustPerform establishes a single source of truth for your enterprise while supporting you in performing granular profitability analysis. See immediately how changes in products, customers, delivery, tariffs, and other factors could affect your profits. </p>
                        </Col>
                        <Col lg={8} md={12}>
                            <img src='../../images/img-bt.png' className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='mt-5 justify-content-center'>
                        <Col md={3}>
                            <p className='leadpara'><b>Visual Data Flows </b></p>
                            <p className={`${['leadpara']} ${classes.leaBorderText}`}>Collect, collate and present the data in one unified view for easier analysis</p>
                        </Col>
                        <Col md={3}>
                            <p className='leadpara'><b>Scenarios Modelling </b></p>
                            <p className={`${['leadpara']} ${classes.leaBorderText}`}>Quickly explore the impact of various situations on your profitability</p>
                        </Col>
                        <Col md={3}>
                            <p className='leadpara'><b>What if Analysis </b></p>
                            <p className={`${['leadpara']} ${classes.leaBorderText}`}>Prepare for possible profitability scenarios by developing multiple models on the fly</p>
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
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-steer.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid}>
                                                <Card.Title className={classes.powerCardTitle}>Steer real-time simulations for quick decisions</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Making quick decisions and simulations is close to impossible with the long cycles of collating, analysing, and reporting of legacy solutions.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    JustPerform helps you quickly simulate and turn insights into reports that can enhance your decision making.
                                                </Card.Text>
                                            </div>

                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col lg={4} md={6}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={12}>
                                            <img src='../../images/icon-self.svg' className={`${['img-fluid']}`} />
                                            <p className='leadpara mb-1 mt-2'><b>Self Service Visualizations </b></p>
                                            <Card.Text>
                                                Make sense easily of insights in highly intuitive self-service reports
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={12}>
                                            <img src='../../images/icon-officeConnector.svg' className={`${['img-fluid']}`} />
                                            <p className='leadpara mb-1 mt-2'><b>Office 365 Connector </b></p>
                                            <Card.Text>
                                                Automatically deliver dashboards and reports in Excel and PowerPoint
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.card2}>
                                <Card.Body>
                                    <Row className='align-items-center g-0'>
                                        <Col md={12}>
                                            <img src='../../images/icon-varianceAnalysis.svg' className={`${['img-fluid']}`} />
                                            <p className='leadpara mb-1 mt-2'><b>Variance Analysis </b></p>
                                            <Card.Text>
                                                Understand changes in profitability, and help improve profitability for the future
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Section>






            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12}>
                            <h3 className='headingBold text-center'>Key enterprises using JustPerform for granular and accurate profitability analysis</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='text-center'>
                            {/* Partners Component*/}
                            <Partners />
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
                            <p>
                                <img src='../../images/imgCustomer.jpg' className='img-fluid' />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>




        </>

    )

}

export default ProfitabilityAnalysis;