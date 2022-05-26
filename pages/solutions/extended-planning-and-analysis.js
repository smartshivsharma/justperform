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
                            <p className='leadpara mt-3'>Disjointed systems, siloed data, and planning in isolation can stop you getting the results you need. These issues obstruct insights and degrade performance, creating gaps between what an organisation should get and what it ends up with. Let JustPerform unite your people, processes, and data in a single platform to bring accuracy and agility to your strategic decision-making.</p>
                            {/* <p className='mt-3'><Button variant='light' className='btnLight'>LEARM MORE</Button></p> */}
                        </Col>
                    </Row>

                </Container>
            </Section>



            <Section className={`${classes.leadingCompanies} ${['sectionBg-White']}`}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className='headingLight'>These leading companies use JustPerform</h2>
                            <h3 className='headingBold'>Move up to a new league of enterprise performance</h3>
                        </Col>
                        <Col md={12}>
                            {/* Partners Component*/}
                            <Partners />
                        </Col>
                    </Row>
                </Container>
            </Section>





            <Section className={`${classes.leadingCompanies} ${['sectionBg-IrisBlue']}`}>
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
            <Section className={`${classes.customers} ${['sectionBg-White']}`}>
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






            <Section className={`${classes.platformBanner} ${classes.useCaseSec} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Use Cases for a Unified Platform</h2>
                        </Col>
                    </Row>

                    <UseCaseRight className="mb-5"
                        image='../../images/img-extendedPlanning.png'
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
                        buttonLink='#'
                    />


                    <UseCaseRight className="mb-5"
                        image='../../images/img-extendedPlanning.png'
                        title='Profitability Analysis'
                        description='Perform in-depth analysis of profitability measures across your products/projects with the help of business centric profitability reference models. Make real-time decisions thanks to insights and visibility into real profitability drivers.'
                        buttonText='LEARN MORE'
                        buttonLink='#'
                    />

                    <UseCaseLeft className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Intelligent Forecasting'
                        description='Bring confidence and reliability to your planning through the power of artificial intelligence and machine learning. Derive insights and recommendations through built-in AI & ML capabilities in JustPerform or integration with another leading AI and ML platform.'
                        buttonText='LEARN MORE'
                        buttonLink='#'
                    />

                    <UseCaseRight className="mb-5"
                        image='../../images/img-extendedPlanning.png'
                        title='Excel Infinity'
                        description='Cut out the inefficiencies and inconsistencies of isolated Excel sheets exchanged via email or shared drives. Use JustPerform Excel∞ for endless enterprise-wide possibilities to seamlessly connect diverse data sources, collate data, and streamline your processes.  '
                        buttonText='LEARN MORE'
                        buttonLink='#'
                    />

                    <UseCaseLeft className="mb-5"
                        image='../../images/img-consolidation.png'
                        title='Embedded for SAP EPM'
                        description='Manage investments in suites like SAP EPM with simplicity and speed. JustPerform helps you manage existing SAP solutions with visual process design, automated deployment, and robust governance capabilities.'
                        buttonText='LEARN MORE'
                        buttonLink='#'
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
                        <Col md={12}>
                            <img src='../../images/tabComponent.png' className='img-fluid' />
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



                    <Row className='row-cols-lg-5 justify-content-center mt-5'>
                        <Col>
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




            {/** FooterContact Component */}
            <FooterContact />


        </>

    )

}

export default ExtendedPlanning;