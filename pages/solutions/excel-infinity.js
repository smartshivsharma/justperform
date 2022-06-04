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


const ExcelInfinity = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Turn your Excel into an enterprise grade solution'
                description='Streamline and transform your processes running on Excel with endless possibilities provided by JustPerform Excel Infinity.'
                
            /> */}


            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading col-lg-11'>Turn your Excel into an enterprise grade solution </h1>
                            <p className='leadpara col-lg-11'>Streamline and transform your processes running on Excel with endless possibilities provided by JustPerform Excel Infinity.</p>
                        </Col>

                        <Col lg={6} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-exelInfinity.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-Green']} ${classes.smStrip}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12} className='text-center'>
                            <h2 className='headingBold3 text-white'>There are over 1 billion Excel installations globally.</h2>
                            <h2 className='headingBold3 text-white'>It&apos;s the world&apos;s third most spoken language!</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={12} md={12}>
                            <h2 className={`${['headingBold2']} ${classes.textGreen} ${['text-center']}`}>Why does everyone use Excel?</h2>
                        </Col>
                    </Row>

                    <Row className='row-cols-lg-5 mt-4'>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-speed.svg' />
                                    <Card.Title className={`${classes.expCardTitle} ${classes.textGreen}`}>Speed</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Get results faster with no dependence on tech teams
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-flexibility.svg' />
                                    <Card.Title className={`${classes.expCardTitle} ${classes.textGreen}`}>Flexibility</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Choose from a wide range of formulae, functions, pivot tables, and much more
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-usability.svg' />
                                    <Card.Title className={`${classes.expCardTitle} ${classes.textGreen}`}>Usability</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Skip the learning curve and enjoy the speedy user adoption
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-support.svg' />
                                    <Card.Title className={`${classes.expCardTitle} ${classes.textGreen}`}>Support</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Access help and huge user communities with ease
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-selfservice.svg' />
                                    <Card.Title className={`${classes.expCardTitle} ${classes.textGreen}`}>Self-service</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Get what you want, when you want, with ad-hoc analytics and reporting
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={6} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold col-lg-11'>Infinite possibilities with JustPerform Excel Infinity</h2>
                            <p className='leadpara mt-4 col-lg-11'>While Excel offers benefits, the lack of validation, the need for complex functions to process data, and the limited scope for automation and collaboration can become serious drawbacks.</p>
                            <p className='leadpara col-lg-11'>So, power up your Excel with the Business Rule Engine, rich modelling, versioning and time dimensions, enterprise grade authorisations, traceability, and scalability.</p>
                            <p className='leadpara col-lg-11'>Let JustPerform Excel Infinity open limitless possibilities to complete your last mile of digital transformation.</p>
                        </Col>
                        <Col lg={5} md={6} className='order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-infinity.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={7} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold'>From error prone to validation driven</h2>
                            <p className='col-lg-11'>Stop the pain of inaccurate data and the sleepless nights trying to figure out the error so you can fix it. With JustPerform, take these problems out of the equation.</p>
                            <p className='leadpara2 col-lg-11'><b>Use smart validations at each activity and task level to eliminate incompleteness and inaccuracies in your data.</b></p>
                        </Col>
                        <Col lg={4} md={6} className='text-center order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-leverage.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>


                    <Row className='justify-content-between align-items-center mt-5'>
                        <Col lg={4} md={5} className='text-center order-2 order-lg-1 order-md-2'>
                            <img src='../../images/img-fragmented.png' className='img-fluid mb-3' />
                        </Col>
                        <Col lg={7} md={6}  className='order-1 order-lg-2 order-md-1'>
                            <h2 className='headingBold col-lg-8'>From fragmented tasks to complete collaboration</h2>
                            <p className='col-lg-11'>Those flurries of messages you&apos;ve been exchanging to collaborate on Excel sheets? The&apos;re all history when you have JustPerform. Inbuilt collaboration capabilities and guided workflows mean you no longer need to go outside Excel to collaborate inside Excel.</p>
                            <p className='leadpara2 col-lg-10'><b>Guided workflows with detailed steps and activities for each user enable streamlined Excel-native co-ordination and collaboration.</b></p>
                        </Col>
                    </Row>


                    <Row className='justify-content-between align-items-center mt-5'>
                        <Col lg={7} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold col-lg-11'>From manual data processing to automated data transformation</h2>
                            <p className='col-lg-11'>VBA, VLOOKUPs, and macros can only take your automation so far. And errors made with these functions can be too difficult to fix by anyone other than an IT expert. Instead, use JustPerform&apos;s capabilities to automate all your data processing with no need for complex formulae or coding and no dependency on IT experts.</p>
                            <p className='leadpara2 col-lg-11'><b>The Business Rule Library contains an exhaustive list of rules to help you make your data processing simple, effective, and successful.</b></p>
                        </Col>
                        <Col lg={4} md={6} className='text-center order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-manualData.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>


                    <Row className='justify-content-between align-items-center mt-5'>
                        <Col lg={4} md={5} className='text-center order-1 order-lg-2 order-md-2'>
                            <img src='../../images/img-noGovernance.png' className='img-fluid mb-3' />
                        </Col>
                        <Col lg={7} md={6} className='order-1 order-lg-2 order-md-1'>
                            <h2 className='headingBold'>From no governance to fine-grain authorisations</h2>
                            <p className='col-lg-11'>Still spending your valuable time on creating multiple sheets just to make sure individual users see only the data they should - then spending yet more time to consolidate all the sheets again afterwards? Secure your sensitive information by allowing people to view and perform only what they need to.</p>
                            <p className='leadpara2 col-lg-11'><b>JustPerform&apos;s inbuilt fine grain authorisations allow you to give specific action access only to the relevant person and make your tracking effortless.</b></p>
                        </Col>
                    </Row>

                    <Row className='justify-content-between align-items-center mt-5'>
                        <Col lg={7} md={6} className='order-1 order-lg-1 order-md-1'>
                            <h2 className='headingBold col-lg-11'>From building-from-scratch to time-saving built-in templates</h2>
                            <p className='col-lg-11'>Make productive use of your most precious resource. Don&apos;t let manual input and reporting activities consume your valuable time. Tap into JustPerform capabilities to kickstart processes while customising as you wish.</p>
                            <p className='leadpara2 col-lg-11'><b>Standard pre-built templates let you save time in your data input, dashboard and report building. They also offer automated conversion of your Excel dashboards into PowerPoint for easier consumption.</b></p>
                        </Col>
                        <Col lg={4} md={6} className='text-center order-2 order-lg-2 order-md-2'>
                            <img src='../../images/img-fromBuilding.png' className='img-fluid mb-3' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg md={12}>
                            <h2 className='headingBold3 text-white text-center'>
                                <img src='../../images/icon-exelInfinity.svg' className='img-fluid' style={{marginTop:'-14px', marginRight:'8px'}} /> 
                              JustPerform Excel Infinity for last mile of your digital transformation
                            </h2>
                            {/* <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="..." alt="...">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className='order-2 order-lg-1 order-md-1'>
                            <h2 className='bannerHeading'>Deploy anywhere and everywhere.</h2>
                            <p className='leadpara mt-4'>Say goodbye to outmoded traditional installations of Excel applications. Deploy Excel Infinity at the click of a button from the Office Add-ins Store.</p>
                            <p className='leadpara'>Start performing from your mobile, tablet, or system with no limitations whatsoever.</p>
                            <Button variant='primary' className='mt-3'>INSTALL NOW</Button>
                        </Col>
                        <Col lg={6} md={6} className='order-1 order-lg-2 order-md-2'>
                            <img src='../../images/img-deploy.png' className='img-fluid mb-3' />
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
                        </Col>
                    </Row>

                    <GartnerCarousel />

                </Container>
            </Section>





        </>

    )

}

export default ExcelInfinity;