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

import LeftImageDesc from '../../components/ui/LeftImageDesc';
import RightImageDesc from '../../components/ui/RightImageDesc';

import UseCaseLeft from '../../components/ui/UseCaseLeft';
import UseCaseRight from '../../components/ui/UseCaseRight';

import Cards from '../../components/ui/Cards';
import ListCards from '../../components/ui/ListCards';

import Partners from '../../components/ui/Partners';


const Consolidation = () => {

    const router = useRouter();

    function buttonHandler() {
        router.push('../book-demo');
    }


    return (
        <>


            <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Let your finance users breathe again.'
                description='Get easier, faster, more accurate consolidation for all your internal and external reporting needs.
                Streamline your consolidation process with the purpose-built Consolidation Pro app. Simplify your communication with audit-friendly self-service reporting.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            />



            <Section className={`${['sectionBg-Gradient']}`}>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col md={4}>
                            <img src='../../images/img-ebook.png' className='img-fluid' />
                        </Col>
                        <Col md={6}>
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
                        <Col md={6}>
                            <h2 className='headingBold'>It's time to end the inefficiencies and the headaches.</h2>
                            <p className='leadpara mt-3'>Consolidation has been a struggle for many companies for too long. Laborious merges from multiple entities of data across account structures are often riddled with complexities. Validation, intercompany eliminations, currency conversion, and reporting can be a nightmare for finance users.</p>
                            <p className='leadpara'>Let JustPerform meet these challenges and streamline your consolidation with speed, accuracy, and auditability.</p>
                        </Col>
                        <Col md={5}>
                            <img src='../../images/img-infe.png' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${classes.leadingCompanies} ${['sectionBg-SkyBlue']}`}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={9} md={12} className='text-center'>
                            <h3 className='headingBold'>These major players simplify and speed up statutory reporting with JustPerform</h3>
                            {/* <h2 className='headingLight'>These leading companies use JustPerform</h2> */}
                        </Col>
                        <Col lg={12} md={12} className='text-center'>
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
                        <Col lg={12} md={12} className='text-center mt-4'>
                            <img src='../../images/img-financialClose.png' />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-White']} ${['pb-0']}`}>
                <Container>
                    <RightImageDesc
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
                    />

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
                    <Row className='justify-content-center align-items-center mt-5'>
                        <Col lg={6} md={6} className='text-center'>
                            Accordian
                        </Col>
                        <Col lg={6} md={6} >
                            <img src='../../images/img-accord.svg' />
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




        </>

    )

}

export default Consolidation;