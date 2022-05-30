import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from 'next/head';

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Tabs, Tab } from 'react-bootstrap';

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


const Solutions = () => {

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

            {/* <InnerBanner
                image='../../images/banner-solutions.png'
                title='Bring speed and scalability to your performance'
                description='Eliminate silos. Enable all departments to work in unison to meet their business goals. Choose JustPerform as your single platform to streamline your business performance management.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}



            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className='order-2 order-lg-1 order-md-1'>
                            <h1 className='bannerHeading'>Bring speed and scalability to your performance</h1>
                            <p className='leadpara'>Eliminate silos. Enable all departments to work in unison to meet their business goals. Choose JustPerform as your single platform to streamline your business performance management.</p>
                            <p><Button variant="primary" onClick={buttonHandler}>BOOK A DEMO</Button></p>
                        </Col>

                        <Col lg={7} md={6} className='order-1 order-lg-2 order-md-2'>
                            <img src='../../images/banner-plateform.svg' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>


            {/* <Section className={`${classes.platformBanner} ${['sectionBg-IrisBlue']}`}></Section> */}

            <Section className={`${['sectionBg-IrisBlue']} ${['pb-0']}`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={6}>
                            <h2 className='headingBold text-white'>100+ JustPerform Apps to guide you to success</h2>
                            <p className='leadpara text-white mt-3'>JustPerform apps use scenarios based on industry best practices. Pick the ones relevant to your enterprise. Use them to kickstart your planning, budgeting, financial close and reporting processes, instead of limiting yourself to a lift and shift of existing processes. </p>
                            {/* <p className='mt-3'><Button variant='light' className='btnLight'>LEARM MORE</Button></p> */}
                        </Col>
                        <Col md={6}>
                            <img src='../../images/img-apsGuide.png' className={`${classes.cardImage} ${['img-fluid']}`} />
                        </Col>
                    </Row>

                    <Row id='appsGuide'>
                        <Col md={12}>
                            <Card className={classes.card}>
                                <Card.Body>
                                    <Row>
                                        <Col md={4}>
                                            <p><img src='../../images/icon-fasterTime.png' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Faster time to value</p>
                                            <p className={classes.cardSubTitle}>Reduce the time you spend in defining applicable scenarios. Choose from a range of ready-to-use scenarios to cover all use cases on a single EPM platform.</p>
                                        </Col>
                                        <Col md={4}>
                                            <p><img src='../../images/icon-knowledge.png' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Knowledge to start right</p>
                                            <p className={classes.cardSubTitle}>Improve the quality and outcome of your plans by aligning with industry best practices.</p>
                                        </Col>
                                        <Col md={4}>
                                            <p><img src='../../images/icon-easyExtend.png' className='img-fluid' /></p>
                                            <p className={classes.cardTitle}>Easy to extend</p>
                                            <p className={classes.cardSubTitle}>Scale your planning or financial close seamlessly by using additional scenarios available or by building your own.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className='text-center'>
                                            <Button variant='primary'>LEARN MORE</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Section>


            <Section className={`${classes.platformBanner} ${classes.useCaseSec} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center mb-5'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Use Cases for a Unified Platform</h2>
                        </Col>
                    </Row>

                    <UseCaseRight className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Extended Planning & Analysis'
                        description='Collaborate across your departments to improve accuracy and agility in your planning. Let JustPerform connect your strategy, finance, people, and operational processes to achieve your overall business goals.'
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/extended-planning-and-analysis'
                    />

                    <UseCaseLeft className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Consolidation'
                        description='Simplify your financial closing with the help of ready-to-use Consolidation Pro Apps that are IFRS and Multi-GAAP compliant. Meet your external reporting needs faster and more easily with 40+ inbuilt audit proof reports and granular reporting for management and CXO needs.'
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/consolidation'
                    />


                    <UseCaseRight className="mb-5"
                        image='../../images/img-extendedPlanning.png'
                        title='Profitability Analysis'
                        description='Perform in-depth analysis of profitability measures across your products/projects with the help of business centric profitability reference models. Make real-time decisions thanks to insights and visibility into real profitability drivers.'
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/profitability-analysis'
                    />

                    <UseCaseLeft className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Intelligent Forecasting'
                        description='Bring confidence and reliability to your planning through the power of artificial intelligence and machine learning. Derive insights and recommendations through built-in AI & ML capabilities in JustPerform or integration with another leading AI and ML platform.'
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/intelligent-forecasting'
                    />

                    <UseCaseRight className="mb-5"
                        image='../../images/img-extendedPlanning.png'
                        title='Excel Infinity'
                        description='Cut out the inefficiencies and inconsistencies of isolated Excel sheets exchanged via email or shared drives. Use JustPerform Excel∞ for endless enterprise-wide possibilities to seamlessly connect diverse data sources, collate data, and streamline your processes.  '
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/excel-infinity'
                    />

                    <UseCaseLeft className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Embedded for SAP EPM'
                        description='Manage investments in suites like SAP EPM with simplicity and speed. JustPerform helps you manage existing SAP solutions with visual process design, automated deployment, and robust governance capabilities.'
                        buttonText='LEARN MORE'
                        buttonLink='./solutions/alm-for-sap-solutions'
                    />

                </Container>
            </Section>



            <Section className={`${['sectionBg-SkyBlue2']} ${['pb-0']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={7} md={12}>
                            <h2 className='headingBold'>Experience the true power of xP&A</h2>
                            <h3 className='headingLight'>Have all your departments plan on one flexible, scalable platform for a single source of truth.</h3>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        {/* <Col md={12}>
                            <img src='../../images/tabComponent.png' className='img-fluid' />
                        </Col> */}
                        <Col lg={12} md={12}>
                            <Card className={classes.powerCard}>
                                <Card.Body className={classes.powerCardBody}>
                                    <Row className='align-items-center'>
                                        <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                            <img src='../../images/img-recog.png' className={`${['img-fluid']}`} />
                                        </Col>
                                        <Col lg={7} md={12} className={classes.powerCardDetails}>

                                            <Tabs defaultActiveKey="0" >
                                                <Tab eventKey="0" title="Finance" >
                                                    <div className="tab-item-wrapper">
                                                        <h2 className='headingBold'>Finance</h2>
                                                        <p className='leadpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vitae quia unde ex ducimus qui reiciendis dolore, cumque possimus.</p>
                                                        <Button variant='primary'>Learn More</Button>
                                                    </div>
                                                    <div className='tabPaging'>
                                                        <ul className='list-inline'>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-left"></i>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <b>01</b> of 05
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-right"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="1" title="Sales" >
                                                    <div className="tab-item-wrapper">
                                                        <h2 className='headingBold'>Sales</h2>
                                                        <p className='leadpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vitae quia unde ex ducimus qui reiciendis dolore, cumque possimus.</p>
                                                        <Button variant='primary'>Learn More</Button>
                                                    </div>
                                                    <div className='tabPaging'>
                                                        <ul className='list-inline'>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-left"></i>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <b>02</b> of 05
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-right"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="2" title="Supply Chain">
                                                    <div className="tab-item-wrapper">
                                                        <h2 className='headingBold'>Supply Chain</h2>
                                                        <p className='leadpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vitae quia unde ex ducimus qui reiciendis dolore, cumque possimus.</p>
                                                        <Button variant='primary'>Learn More</Button>
                                                    </div>
                                                    <div className='tabPaging'>
                                                        <ul className='list-inline'>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-left"></i>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <b>03</b> of 05
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-right"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="3" title="HR">
                                                    <div className="tab-item-wrapper">
                                                        <h2 className='headingBold'>HR</h2>
                                                        <p className='leadpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vitae quia unde ex ducimus qui reiciendis dolore, cumque possimus.</p>
                                                        <Button variant='primary'>Learn More</Button>
                                                    </div>
                                                    <div className='tabPaging'>
                                                        <ul className='list-inline'>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-left"></i>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <b>04</b> of 05
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-right"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="4" title="Marketing">
                                                    <div className="tab-item-wrapper">
                                                        <h2 className='headingBold'>Marketing</h2>
                                                        <p className='leadpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero vitae quia unde ex ducimus qui reiciendis dolore, cumque possimus.</p>
                                                        <Button variant='primary'>Learn More</Button>
                                                    </div>
                                                    <div className='tabPaging'>
                                                        <ul className='list-inline'>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-left"></i>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <b>05</b> of 05
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <i className="las la-arrow-right"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                            </Tabs>

                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

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




            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col lg={12} md={12}>
                            <h2 className='headingBold'>From automotive to agriculture, health care to hospitality.</h2>
                            <p className='leadpara'>JustPerform delivers tailor made planning and budgeting models with industry recognised key drivers and KPIs to drive agile planning.</p>
                        </Col>
                    </Row>



                    <Row className='row-cols-lg-5 row-cols-md-3 row-cols-2 justify-content-center mt-5'>
                        <Col lg>
                            <ListCards
                                image='../../images/icon-telecom.png'
                                title='Telecom'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-manufacturing.png'
                                title='Manufacturing'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-shipping.png'
                                title='Shipping & Logistics'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-financialServices.png'
                                title='Financial Services'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-healthCare.png'
                                title='Health Care'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-realEstate.png'
                                title='Real Estate'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-Retail.png'
                                title='Retail'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-energy.png'
                                title='Energy & Utilities'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-hospitality.png'
                                title='Hospitality'
                            />
                        </Col>
                        <Col>
                            <ListCards
                                image='../../images/icon-more.png'
                                title='More'
                            />
                        </Col>
                    </Row>

                </Container>
            </Section>





        </>

    )

}

export default Solutions;