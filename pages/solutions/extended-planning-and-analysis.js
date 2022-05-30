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

import PowerCardLeft from '../../components/ui/PowerCardLeft';
import PowerCardRight from '../../components/ui/PowerCardRight';

import Partners from '../../components/ui/Partners';


const ExtendedPlanning = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>
            {/* <Section className={`${classes.platformBanner} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={5} md={6}>
                            <h1 className='bannerHeading'>Bring speed and scalability to your performance</h1>
                            <p className='leadpara'>Eliminate silos. Enable all departments to work in unison to meet their business goals. Choose JustPerform as your single platform to streamline your business performance management.</p>
                            <p><Button variant="primary">Book a Demo</Button></p>
                        </Col>

                        <Col md={6}>
                            <img src='../../images/banner-solutions.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section> */}

            <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Break down silos. Plan together. Plan better.'
                description='Bring collaboration to your enterprise planning. Build business agility and resilience into your organisation by connecting your strategic, financial, and operational plans. Outperform each day as your business and the world changes.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            />



            {/* <Section className={`${classes.platformBanner} ${['sectionBg-IrisBlue']}`}></Section> */}

            <Section className={`${['sectionBg-SkyBlue']}`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={6}>
                            <img src='../../images/img-speedAccuracy.svg' className={`${['img-fluid']}`} />
                        </Col>
                        <Col md={6}>
                            <h2 className='headingBold '>The speed and accuracy of your decision-making are more important than ever. </h2>
                            <p className='leadpara mt-3'>Disjointed systems, siloed data, and planning in isolation can stop you getting the results you need. These issues obstruct insights and degrade performance, creating gaps between what an organisation should get and what it ends up with.</p>
                            <p className='leadpara'>Let JustPerform unite your people, processes, and data in a single platform to bring accuracy and agility to your strategic decision-making.</p>
                            {/* <p className='mt-3'><Button variant='light' className='btnLight'>LEARM MORE</Button></p> */}
                        </Col>
                    </Row>

                </Container>
            </Section>



            <Section className={`${classes.leadingCompanies} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={9} md={12} className='text-center'>
                            <h3 className='headingBold'>These leading companies now optimise their planning, thanks to JustPerform</h3>
                            {/* <h2 className='headingLight'>These leading companies use JustPerform</h2> */}
                        </Col>
                        <Col lg={12} md={12} className='text-center'>
                            {/* Partners Component*/}
                            <Partners />
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${['sectionBg-IrisBlue']}`}>
                <Container>
                    <Row className='text-center text-white'>
                        <Col md={12}>
                            <h2 className='headingLight'>Extended Planning & Analysis with JustPerform</h2>
                            <h3 className='headingBold'>Drive continuous, collaborative, enterprise-wide planning</h3>
                        </Col>
                        <Col md={12} className="mt-5">
                            <img src='../../images/img-xpa.svg' className={`${['img-fluid']}`} />
                        </Col>
                    </Row>
                </Container>
            </Section>




            {/* Customer Love Section */}
            <Section className={`${['sectionBg-Gradient']} ${['pb-0']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12} className='text-center'>
                            <h2 className='headingBold text-white'>Our customers love JustPerform!</h2>
                            <p className='leadpara text-white'>Our customers rate us highly on Gartner Peer Insights and we reciprocate. Through constant integration of their feedback, we continue to offer them the most user-centric business performance management platform ever.</p>
                        </Col>
                    </Row>

                    <Row className={`${['justify-content-center']} ${['mt-4']}`}>
                        <Col lg={8} md={12} className='text-center'>
                            <Card className={classes.gartnerCard}>
                                <Card.Body><img src='../../images/imgCustomer.jpg' className='img-fluid' /></Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Section>






            <Section className={`${classes.platformBanner} ${classes.useCaseSec} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center mb-4'>
                        <Col lg={11} md={12}>
                            <h2 className='headingBold'>The power of JustPerform for all your xP&A</h2>
                            <p className='headingLight'>Imagine one smart, unified, business-user-friendly platform serving all your planning and analysis needs across your enterprise. </p>
                        </Col>
                    </Row>




                    {/* <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}`}>
                        <Col lg={11} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <div className='vMid'></div>
                                        <Row className='align-items-center'>
                                            <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                                <img src='../../images/img-finance.png' className={`${['img-fluid']}`} />
                                            </Col>
                                            <Col lg={7} md={12} className={classes.powerCardDetails}>
                                                <Card.Title className={classes.powerCardTitle}>Finance</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Easily collaborate across your FP&A teams to streamline finance processes. Improve results with JustPerform’s inbuilt financial intelligence. Jump start and accelerate to value with ready to use finance apps for all your critical FP&A use cases, including:
                                                </Card.Text>
                                                <ul>
                                                    <li>Revenue planning</li>
                                                    <li>Operational expense planning</li>
                                                    <li>Capital expenditure planning</li>
                                                    <li>Balance sheet, profit & loss, and cash flow planning</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row> */}



                    {/* <PowerCardLeft
                        image='../../images/img-finance.png'
                        title='Finance'
                        description='Easily collaborate across your FP&A teams to streamline finance processes. Improve results with JustPerform’s inbuilt financial intelligence. Jump start and accelerate to value with ready to use finance apps for all your critical FP&A use cases, including:'
                    />


                    <PowerCardRight
                        image='../../images/img-sales.png'
                        title='Sales'
                        description='Bring stability and certainty to your revenues with insight-based sales planning. Eliminate guesswork and ineffective generic approaches. Instead, drill down into your revenue drivers to transform your incentive plans precisely for success.'
                    />


                    <PowerCardLeft
                        image='../../images/img-supplyChain.png'
                        title='Supply Chain'
                        description='Develop a robust supply chain with data-driven insights and a clear understanding of supply-demand drivers. Gauge the impact of external factors with on-the-fly simulations and scenario modelling.'
                    />


                    <PowerCardRight
                        image='../../images/img-hr.png'
                        title='HR'
                        description='Plan your workforce needs by easily assessing and bridging the gap between demand and supply. Create and operationalise accurate compensation plans to assist your retention and acquisition objectives.'
                    />


                    <PowerCardLeft
                        image='../../images/img-marketing.png'
                        title='Marketing'
                        description='Optimize resource and budget allocation to improve marketing performance. Bring together sales results and marketing performance in a unified view to drive accuracy in forecasting revenue.'
                    /> */}


                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-finance.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid1}>
                                                <Card.Title className={classes.powerCardTitle}>Finance</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Easily collaborate across your FP&A teams to streamline finance processes. Improve results with JustPerform’s inbuilt financial intelligence. Jump start and accelerate to value with ready to use finance apps for all your critical FP&A use cases, including:
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    <ul className={classes.list}>
                                                        <li>Revenue planning</li>
                                                        <li>Operational expense planning</li>
                                                        <li>Capital expenditure planning</li>
                                                        <li>Balance sheet, profit & loss, and cash flow planning</li>
                                                    </ul>
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
                                            <div className={classes.vMidRight2}>
                                                <Card.Title className={classes.powerCardRightTitle}>Sales</Card.Title>
                                                <Card.Text className={classes.powerCardRightText}>
                                                    Bring stability and certainty to your revenues with insight-based sales planning. Eliminate guesswork and ineffective generic approaches. Instead, drill down into your revenue drivers to transform your incentive plans precisely for success.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    <ul className={classes.list}>
                                                        <li>Sales planning</li>
                                                        <li>Sales targets</li>
                                                        <li>Incentive management</li>
                                                        <li>And much more</li>
                                                    </ul>
                                                </Card.Text>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} className={`${classes.powerCardRightImage}`}>
                                            <img src='../../images/img-sales.png' className={`${['img-fluid']}`} />
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>


                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-supplyChain.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid1}>
                                                <Card.Title className={classes.powerCardTitle}>Supply Chain</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Develop a robust supply chain with data-driven insights and a clear understanding of supply-demand drivers. Gauge the impact of external factors with on-the-fly simulations and scenario modelling.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    <ul className={classes.list}>
                                                        <li>Supply planning</li>
                                                        <li>Demand planning</li>
                                                        <li>Gap analysis</li>
                                                        <li>And many other use cases</li>
                                                    </ul>
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
                                            <div className={classes.vMidRight2}>
                                                <Card.Title className={classes.powerCardRightTitle}>HR</Card.Title>
                                                <Card.Text className={classes.powerCardRightText}>
                                                    Plan your workforce needs by easily assessing and bridging the gap between demand and supply. Create and operationalise accurate compensation plans to assist your retention and acquisition objectives.
                                                </Card.Text>
                                                <Card.Text className={classes.powerCardText}>
                                                    <ul className={classes.list}>
                                                        <li>Strategic workforce planning </li>
                                                        <li>Skills assessment planning</li>
                                                        <li>Workforce demand and supply planning</li>
                                                        <li>Gap analysis</li>
                                                        <li>Compensation planning</li>
                                                    </ul>
                                                </Card.Text>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} className={`${classes.powerCardRightImage}`}>
                                            <img src='../../images/img-hr.png' className={`${['img-fluid']}`} />
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>



                    <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mt-4']}`}>
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-marketing.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>
                                            <div className={classes.vMid}>
                                                <Card.Title className={classes.powerCardTitle}>Marketing</Card.Title>
                                                <Card.Text className={classes.powerCardText}>
                                                    Optimize resource and budget allocation to improve marketing performance. Bring together sales results and marketing performance in a unified view to drive accuracy in forecasting revenue.
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



            {/** FooterContact Component 
            <FooterContact />*/}


        </>

    )

}

export default ExtendedPlanning;