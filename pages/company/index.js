import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from 'next/head';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import classes from '../../styles/Company.module.css';

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



const Company = () => {


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


            {/* <Section className={`${['sectionBg-SkyBlue2']} ${classes.companyBanner}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6}  className="order-2 order-lg-1 order-md-1">
                            <h1 className='bannerHeading'>We empower you for business performance</h1>
                            <p className='leadpara'>You merit real solutions for business performance management from a company that constantly strives to simplify business users&apos; lives and empower organizations. That&apos;s JustPerform. Who else!</p>
                        </Col>

                        <Col lg={7} md={6} className="order-1 order-lg-2 order-md-2">
                            <img src='../../images/banner-company.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section> */}


            <Section className={`${['sectionBg-SkyBlue2']} ${classes.serviceBanner}`}>
                <Container fluid className={classes.bannerContainer}>
                    <Row className='justify-content-end align-items-center g-0'>
                        <Col lg={4} md={12} className={`${classes.colBanner} ${['order-2 order-lg-1 order-md-2']} `}>
                            <div className={classes.bannerText}>
                                <h1 className='bannerHeading'>We empower you for business performance</h1>
                                <p className='leadpara'>You merit real solutions for business performance management from a company that constantly strives to simplify business users&apos; lives and empower organizations. That&apos;s JustPerform. Who else!</p>
                            </div>
                        </Col>
                        <Col lg={5} className='offset-lg-1 order-1 order-lg-2 order-md-1'>
                            <div className={classes.serviceBannerImage}></div>
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-Gradient']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col md={12}>
                            <h2 className='headingLight text-white text-center'>You deserve more for your EPM than just another tech company&apos;s software.</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>


            <Section className={`${['sectionBg-SkyBlue2']} ${classes.smStrip}`}>
                <Container>
                    <Row className='align-items-start justify-content-between'>
                        <Col lg={4} md={12}>
                            <h2 className='bannerHeading'>Where it all began</h2>
                            <p className='leadparaBorderd mt-5'><b>JustPerform is all about simplifying business users&apos; lives. We empower them with financial intelligence and the most guided, intuitive user experience ever. The easier it is for users, the better the agility and the results.</b></p>
                        </Col>
                        <Col lg={7} md={12}>
                            <p className='leadpara'>Today, businesses need agility, accuracy, and scalability like never before. But technological innovation must still offer a better experience to business users.</p>

                            <p className='leadpara'>In over 150+ past budgeting and reporting projects, we&apos;ve seen the difficulties for organisations to adopt, manage, and monitor EPM systems.</p>

                            <p className='leadpara'>So, we decided to make EPM simpler, more enjoyable, and more effective for business users by letting them own and drive their performance management the way they want.</p>

                            <p className='leadpara'>This led to the emergence of JustPerform, the most user-centric EPM platform for empowering business users and enabling business agility.</p>

                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h2 className='headingBold'>The values we live by at JustPerform</h2>
                            <p className='leadpara'>With our customers at the heart of all we do, these are the core values that drive us as the team powering JustPerform.</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center align-items-center mt-5 mb-5'>
                        <Col lg={6} md={8}>
                            <img src='../../images/img-customerValue.svg' className='img-fluid' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h3 className={classes.expCardTitle}>Innovation</h3>
                            <p className={classes.expCardText}>We continuously explore and develop better ways to get things done</p>

                            <h3 className={classes.expCardTitle}>Transparency</h3>
                            <p className={classes.expCardText}>We are honest, open, and accountable to both customers and ourselves</p>

                            <h3 className={classes.expCardTitle}>Inclusivity</h3>
                            <p className={classes.expCardText}>We embrace differences to build a united vision of empowering business users </p>

                            <h3 className={classes.expCardTitle}>Excellence</h3>
                            <p className={classes.expCardText}>We&apos;ll only settle for the best, for JustPerform and for you, our customer</p>

                            <h3 className={classes.expCardTitle}>Simplicity</h3>
                            <p className={classes.expCardText}>We take pride in simplifying even the most complex to optimise results </p>
                        </Col>
                    </Row>



                    {/* <PowerCardLeft
                        image='../../images/img-recog.png'
                        title='Recognition from top analysts'
                        description='BPM Partners, a vendor neutral top research & consulting EPM firm recognised JustPerform as a highly rated platform in customer satisfaction ratings.'
                    /> */}


                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-recog.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid}>

                                                <Card.Title className={classes.powerCardTitle}>Recognition from top analysts</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    BPM Partners, a vendor neutral top research & consulting EPM firm recognised JustPerform as a highly rated platform in customer satisfaction ratings.
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




            <Section className={`${['sectionBg-Blue']}`}>
                <Container>
                    <Row className='justify-content-center text-center text-white'>
                        <Col md={12}>
                            <h2 className='headingBold'>Meet the Just&apos;Performers</h2>
                            <p className='leadpara mt-4'>JustPerform thrives by nurturing an environment that gets the best of everyone. With passion, perseverance, and purpose, we don&apos;t just work: we celebrate the journey of empowering business users.</p>

                            <p className='leadpara'>It&apos;s a privilege to be part of the JustPerform team and the vision of &apos;simplifying business user lives&apos;. Seeing the positive impact of our work for our customers pushes me to give my best in everything I do. </p>

                            <p className='leadpara'>JustPerform is one of the most welcoming companies that I have worked in. It encourages innovation and values individuals for their uniqueness. With its energy, focus, commitment, and fun, it&apos;s the best thing that ever happened to me! </p>

                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='text-center'>
                        <Col md={12}>
                            <h2 className='headingLight'>Our Teams</h2>
                            <h3 className='headingBold'>Driven by Vision. Fuelled with Innovation</h3>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-engineering.svg' />
                                    <Card.Title className={classes.expCardTitle}>Engineering</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We are the ones building the platform customers love. We are innovative, passionate, and user centric.
                                    </Card.Text>
                                </Card.Body>
                                {/* <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></Link>
                                </Card.Footer> */}
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-customerService.svg' />
                                    <Card.Title className={classes.expCardTitle}>Customer Success</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We work towards customer success and deliver superior experience by simplifying all touch points.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-marketing.svg' />
                                    <Card.Title className={classes.expCardTitle}>Marketing</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We listen to market needs and challenges, map out what JustPerform must do to meet them, and communicate what our brand stands for.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-sales.svg' />
                                    <Card.Title className={classes.expCardTitle}>Sales</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We take our platform to the right users and help them address their performance management challenges.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-finance.svg' />
                                    <Card.Title className={classes.expCardTitle}>Finance</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We make sure all the numbers add up for our own smart business growth, so that JustPerform continues to help you get even better results.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/icon-legel.svg' />
                                    <Card.Title className={classes.expCardTitle}>Legal</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        We take care of overall compliance and simplify legal complexities to ensure that we are a fair, reliable, valuable partner for you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={9} md={12}>
                            <h2 className='bannerHeading'>Be a JustPerform partner</h2>
                            <p className='leadpara'>Experience customer delight for yourself by using JustPerform to solve the planning, financial close, and reporting challenges of your own clients. Improve the productivity of your teams, accelerate your projects, and wow your clients with JustPerform&apos;s streamlined performance management.</p>
                            <Button variant='primary' className='mt-2'>Become a Partner</Button>
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${classes.leadingCompanies} ${['sectionBg-SkyBlue']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={9} md={12} className='text-center'>
                            <h3 className='headingBold'>These major players simplify and speed up statutory reporting with JustPerform </h3>
                            {/* <h2 className='headingLight'>These leading companies use JustPerform</h2> */}
                        </Col>
                        <Col lg={12} md={12} className='text-center'>
                            {/* Partners Component*/}
                            <Partners />
                        </Col>
                    </Row>
                </Container>
            </Section>


        </>

    )
}

export default Company;