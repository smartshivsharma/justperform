import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import { Container, Row, Col, Button, Card } from "react-bootstrap";


import classes from '../../styles/Platform.module.css';

import FooterContact from '../../components/layout/FooterContact';
import Section from '../../components/ui/Section';
import CustomerSpeakDark from '../../components/ui/CustomerSpeakDark';

import LeftImageDesc from '../../components/ui/LeftImageDesc';
import RightImageDesc from '../../components/ui/RightImageDesc';

import LegacyModern from '../../components/ui/LegacyModern';


import PlatFormBanner from '../../public/images/banner-plateform.png'
import EmpowerUsers from '../../public/images/imgEmpower.png'
import MarketPlace from '../../public/images/imgMarketPlace.svg'
import Integration from '../../public/images/imgIntegration.png'
import CollectData from '../../public/images/imgCollectData.png'

import ImgNextGen from '../../public/images/imgNextGen.png'

import JustperformClound from '../../public/images/logo-JustperformClound.svg'



const Platform = () => {


    const router = useRouter();

    function mailtoHandler() {
        router.push('mailto:contact@justperform.com');
    }


    return (
        <>


            {/* <InnerBanner
                image='../../images/banner-extendedPlanning.png'
                title='Break down silos. Plan together. Plan better.'
                description='Bring collaboration to your enterprise planning. Build business agility and resilience into your organisation by connecting your strategic, financial, and operational plans. Outperform each day as your business and the world changes.'
                buttonText='BOOK A DEMO'
                onClick={buttonHandler}
            /> */}



            {/* <section className={classes.platformBanner}> </section> */}
            <Section className={`${classes.platformBanner} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} md={6} className='order-2 order-lg-1 order-md-1'>
                            <h1 className='bannerHeading'>Easy to adopt. <br /> Powerful at scale.</h1>
                            <p className='leadpara'>JustPerform is a cloud-native intelligent platform and a unified solution for your enterprise to plan, consolidate, report, and analyse.</p>
                            <p><Button variant="primary">Download Platform Overview</Button></p>
                        </Col>

                        <Col lg={7} md={6} className='order-1 order-lg-2 order-md-2'>
                            {/* <img src='../../images/banner-plateform.png' className='img-fluid' /> */}
                            <Image src={PlatFormBanner} layout='responsive' className='img-fluid' priority />
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gradient']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h2 className='headingBold2 text-white'>Free yourself from legacy limitations.</h2>
                        </Col>
                        <Col lg={9}>
                            <h3 className='headingLight text-white'>The future of your business performance management starts here today with JustPerform.</h3>
                            <p className='mt-4'><Button variant='light' className='btnLight' onClick={mailtoHandler}>BOOK A DEMO</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col md={12}>
                            <h3 className='headingLight'>Built by enterprise performance management experts</h3>
                            <h2 className='headingBold2'>Move to a new era of simplicity, scalability, and governance.</h2>
                            {/* <p className='mt-5'>
                                <img src='../../images/imgEnterprise.svg' className='img-fluid' />
                            </p> */}
                        </Col>
                    </Row>

                    <Row className='justify-content-center mt-5'>
                        <Col lg={11}>
                            <Row className='justify-content-center align-items-center text-center mb-3'>
                                <Col lg={5} md={5} xs={5}>
                                    <h2 className='headingLight' style={{ fontWeight: '700' }}>Legacy</h2>
                                </Col>
                                <Col lg={1} md={1} xs={1} className={`${classes.leArrow} ${['text-center']}`}>
                                    <i class="fa fa-angle-right"></i>
                                </Col>
                                <Col lg={5} md={5} xs={5}>
                                    <h2 className='headingLight' style={{ fontWeight: '700' }}>Modern</h2>
                                </Col>
                            </Row>

                            {/* <Row className='justify-content-center align-items-center'>
                                <Col lg={5} md={5}>
                                    <div className={classes.legacyBx}>
                                        Disjointed planning, financial close, and reporting efforts
                                    </div>
                                </Col>
                                <Col lg={1} md={1} className={classes.leArrow}>
                                    <i class="las la-angle-right"></i>
                                </Col>
                                <Col lg={5} md={5}>
                                    <Card className={classes.modernCard}>
                                        <Card.Body>
                                            <Row className='align-items-center g-0'>
                                                <Col md={2} xs={2}>
                                                    <img src='../../images/icon-assess1.svg' className={`${['img-fluid']}`} />
                                                </Col>
                                                <Col md={10} xs={10}>
                                                    <Card.Text> One unified solution for all your EPM use cases </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row> */}

                            <LegacyModern
                                legacyTitle='Disjointed planning, financial close, and reporting efforts'
                                modernTitle='One unified solution for all your EPM use cases'
                                image='../../images/icon-modern1.svg'
                            />

                            <LegacyModern
                                legacyTitle='Rigid outdated tech constraints'
                                modernTitle='Flexible business user-driven performance management'
                                image='../../images/icon-modern2.svg'
                            />


                            <LegacyModern
                                legacyTitle='Fragmented performance handling in silos'
                                modernTitle='Smart centralised and collaborative performance management'
                                image='../../images/icon-modern3.svg'
                            />


                            <LegacyModern
                                legacyTitle='Missing governance and audit trails'
                                modernTitle='High traceability with fine grain authorisations'
                                image='../../images/icon-modern4.svg'
                            />

                            <LegacyModern
                                legacyTitle='Chores of non-value-add tasks like coding and configuration'
                                modernTitle='Effective business process design, analysing and decision-making'
                                image='../../images/icon-modern5.svg'
                            />



                        </Col>
                    </Row>

                </Container>
            </Section>




            <Section className={`${['sectionBg-White']}`}>
                <Container>

                    {/* <RightImageDesc className="justify-content-between leadparaBorderdNo"
                        title='Empower users, transform processes, and develop agility'
                        description='Experience the power of the new age software that lets your end users drive their planning, financial close, and reporting. With JustPerform, own your enterprise performance management initiatives. Simplify your EPM processes. Enhance your business performance.'
                        image='../../images/imgEmpower.svg'
                    /> */}


                    <Row className='align-items-center justify-content-between'>
                        <Col lg={6} md={6}>
                            <h3 className='headingBold'>Empower users, transform processes, and develop agility</h3>
                            <p className='leadpara'>Experience the power of the new age software that lets your end users drive their planning, financial close, and reporting. With JustPerform, own your enterprise performance management initiatives. Simplify your EPM processes. Enhance your business performance.</p>
                        </Col>
                        <Col lg={5} md={6}>
                            {/* <img src='../../images/imgEmpower.png' className='img-fluid' /> */}
                            <Image src={EmpowerUsers} layout='responsive' className='img-fluid' />
                        </Col>
                    </Row>


                    <Row className={classes.foundattionRw}>
                        <Col md={12}>
                            <h2 className='headingBold text-center'>Foundational Pillars of JustPerform</h2>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col lg={4} md={12}>
                            <Card className={classes.foundCard}>
                                <Card.Body>
                                    <img src='../../images/icon-pillar1.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.foundCardTitle}>Business Process Focus</Card.Title>
                                    <Card.Title className={classes.foundCardSubTitle}>
                                        Streamline EPM processes within the platform for collaborative power across your enterprise.
                                    </Card.Title>
                                    <ul className={classes.list}>
                                        <li>State of the art visual process designer for seamless planning, close, and reporting process definition</li>
                                        <li>In-built financial intelligence to provide you relevant expertise in planning, close, and reporting</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className={classes.foundCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE &nbsp; <i className="fa fa-chevron-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card className={classes.foundCard}>
                                <Card.Body>
                                    <img src='../../images/icon-pillar2.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.foundCardTitle}>Intuitive User Experience</Card.Title>
                                    <Card.Title className={classes.foundCardSubTitle}>
                                        Turn your end users into owners and replace external dependencies by empowerment.
                                    </Card.Title>
                                    <ul className={classes.list}>
                                        <li>Guided process flow and workflows to execute planning and financial close processes</li>
                                        <li>Familiar Excel interface to eliminate learning curves</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className={classes.foundCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE &nbsp; <i className="fa fa-chevron-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>
                            <Card className={classes.foundCard}>
                                <Card.Body>
                                    <img src='../../images/icon-pillar3.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.foundCardTitle}>Governance and Change</Card.Title>
                                    <Card.Title className={classes.foundCardSubTitle}>
                                        Inbuilt governance allows business users to make the modifications they need in business process or calculation logic.
                                    </Card.Title>
                                    <ul className={classes.list}>
                                        <li>Single source of truth and transparent process flows enable quick, easy updates to budgets, forecasts, and consolidated results</li>
                                        <li>Fine grain authorisations give you precise & secure control</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className={classes.foundCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE &nbsp; <i className="fa fa-chevron-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${classes.roadMapSub} ${['sectionBg-IrisBlue']} ${['pb-0']} ${['pt-0']}`}>
                <Container fluid className='p-0'>
                    <Row className='align-items-center justify-content-start g-0'>
                        <Col lg={6} md={12}>
                            {/* <img src='../../images/imgNextGen.png' className='img-fluid' /> */}
                            <Image src={ImgNextGen} layout='responsive' className='img-fluid' />
                        </Col>
                        <Col lg={5} md={12}>
                            <div className={classes.nextgenText}>
                                <h2 className='headingBold text-white'>The Next Gen Platform to Future Proof Your Business Performance Management</h2>
                                <p className='leadpara text-white mt-3'>Stay ahead of your competition by leveraging artificial intelligence and machine learning in your planning and reporting. Boost your accuracy and speed of decision making with automated insights and recommendations from AI and ML powered models.</p>
                                <p className='mt-3'><Button variant='light' className='btnLight'>LEARM MORE</Button></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${classes.roadMapSub} ${['sectionBg-White']}`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={5} md={6} className='order-2 order-lg-1 order-md-1'>
                            <h2 className='headingBold'>Go further, faster with JustPerform Marketplace.</h2>
                            <p className='leadpara mt-3'>JustPerform applications are designed to accelerate value creation. Tailored to specific sectors, they are built on industry best practices. Deploy these robust apps for your sector in minimal time for quicker planning, closing, and reporting actions.</p>
                            <p className='mt-3'><Button variant='primary'>LEARM MORE</Button></p>
                        </Col>
                        <Col lg={6} md={6} className='order-1 order-lg-2 order-md-2 mb-3'>
                            {/* <img src='../../images/imgMarketPlace.png' className='img-fluid' /> */}
                            <Image src={MarketPlace} layout='responsive' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Section>



            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={6} md={6}>
                            {/* <img src='../../images/imgIntegration.png' className='img-fluid' /> */}
                            <Image src={Integration} layout='responsive' className='img-fluid' />
                        </Col>
                        <Col lg={5} md={6}>
                            <h2 className='headingBold2'>Integrations</h2>
                            <p className='leadparaBorderd'>Seamlessly integrate with all your ERPs, CRMs, BI systems, and spreadsheets. Eliminate manual collation and consolidation of your data, thanks to direct connections from JustPerform to more than 80 source systems.</p>
                        </Col>
                    </Row>

                    {/* <LeftImageDesc className="justify-content-between"
                        title='Integrations'
                        description='Seamlessly integrate with all your ERPs, CRMs, BI systems, and spreadsheets. Eliminate manual collation and consolidation of your data, thanks to direct connections from JustPerform to more than 80 source systems.'
                        image='../../images/imgIntegration.svg'
                    /> */}


                    <Row className='mt-5 align-items-center justify-content-between'>
                        <Col lg={5} md={6}>
                            <h2 className='headingBold2'>Do not just collect data &ndash; Examine it, transform it, and enhance it with ease.</h2>
                            <p className='leadparaBorderd'>The unique JustPerform data flow designer helps your users to wrangle and enrich data quickly and simply.</p>
                        </Col>
                        <Col lg={6} md={6}>
                            {/* <img src='../../images/imgCollectData.png' className='img-fluid' /> */}
                            <Image src={CollectData} layout='responsive' className='img-fluid' />
                        </Col>
                    </Row>


                    {/* <RightImageDesc className="justify-content-between"
                        title='Do not just collect data Examine it, transform it, and enhance it with ease.'
                        description='The unique JustPerform data flow designer helps your users to wrangle and enrich data quickly and simply.'
                        image='../../images/imgCollectData.svg'
                    /> */}


                    <Row className='mt-5 text-center'>
                        <Col md={12}>
                            <Button variant='primary'>LEARM MORE</Button>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${['sectionBg-Gray2']}`}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className='headingBold text-center'>Experience the power of JustPerform with endless capabilities</h2>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconModeling.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Modelling</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Effortlessly structure your data by leveraging the advanced multi-dimensional highly scalable models.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconAnalytics.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Analytics & Reporting</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Gain in-depth insights through flexible automated analytics and conversational reporting.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconOffice.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Office 365 Connector</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Accelerate adoption by your users with a purpose-built Excel connector on any device without any installation, for online and offline usage.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconBusiness.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Business Reference Models</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Kick start your planning and financial close processes with readily available financial intelligence based on industry best practices.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconSecurity.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Security</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Stay protected with robust security including role-based user access, centralised access control, and SOC2 compliance.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card className={classes.expCard}>
                                <Card.Body>
                                    <img src='../../images/iconDeployment.svg' className='solutionsCardImg' />
                                    <Card.Title className={classes.expCardTitle}>Deployment</Card.Title>
                                    <Card.Text className={classes.expCardText}>
                                        Enjoy flexibility in deployment with private cloud or public cloud deployment options, both offering the same high levels of security and reliability.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.expCardFooter}>
                                    <Link href="javascript:void(0)"><a>LEARN MORE <i className="fa fa-long-arrow-right"></i></a></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Section>




            <Section className={`${classes.custCarousel} ${['sectionBg-White']}`}>
                <Container>
                    {/** CustomerSpeak Component */}
                    <CustomerSpeakDark />

                </Container>
            </Section>



            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='text-center justify-content-center'>
                        <Col lg={8} md={12}>
                            {/* <img src='../../images/logo-JustperformClound.svg' className='img-fluid' /> */}
                            <Image src={JustperformClound} layout='responsive' className='img-fluid' />
                            <h2 className='headingBold2 mt-4'>Choose what suits you best</h2>
                        </Col>
                        <Col lg={9} md={12}>
                            <p className='leadpara'>With both public and private cloud deployment options available, go for the deployment that best fits your
                                organisation with no compromise on robustness and security.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>





        </>

    )
}

export default Platform;