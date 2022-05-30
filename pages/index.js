import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";


import classes from '../styles/Home.module.css';

import FooterContact from '../components/layout/FooterContact';
import CustomerSpeak from '../components/ui/CustomerSpeak';
import Section from '../components/ui/Section';
import Cards from '../components/ui/Cards';
import Partners from '../components/ui/Partners';
import LeftImageDesc from '../components/ui/LeftImageDesc';
import RightImageDesc from '../components/ui/RightImageDesc';



const DUMMY_DATA_EMP = [
  {
    id: 'c1',
    image: '../../images/solutionsIcon-1.svg',
    title: 'Extended Planning & Analysis',
    description: 'Agile and scalable planning from strategy to operations',
  },
  {
    id: 'c2',
    image: '../../images/solutionsIcon-2.svg',
    title: 'Financial Close',
    description: 'Fast, accurate, and fully compliant consolidated results',
  },
  {
    id: 'c3',
    image: '../../images/solutionsIcon-3.svg',
    title: 'Profitability Analysis',
    description: 'In-depth analysis for the right profitability measures',
  },
  {
    id: 'c4',
    image: '../../images/solutionsIcon-4.svg',
    title: 'Intelligent Forecasting',
    description: 'AI & ML driven forecasting for confident decision making',
  },
  {
    id: 'c5',
    image: '../../images/solutionsIcon-5.svg',
    title: 'Excel Infinity',
    description: 'Leverage and streamline processes running on Excel',
  },

];


const HomePage = () => {
  return (
    <>

      <Head>
        <title>The Fastest and Most Reliable Way to Deliver SAP BPC Implementations</title>
        <meta name="description"
          content="Red Apricot inspires businesses to transform enterprise performance management processes via an innovative technology-enabled solution methodology" />
          <link rel="icon" href="/favicon.png" />
      </Head>


      {/* <section className='secWrapper'>
        <Row id="banner-home">
        <Row className={`${classes.categoryTitle} ${['g-0']} ${['align-items-center']}`}>
          <Col md={12} id="bannerCarousel">
            <HomeBannerList />
           <HomeBannerList bannerLists={DUMMY_DATA} />
          </Col>
        </Row>
      </section> */}



      {/* <section className={classes.homeBookDemo}></section> */}
      <Section className={`${classes.homeBookDemo} ${['sectionBg-White']}`}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={10} md={12}>
              <h1>Unleash the performance of your enterprise with one intelligent, easy to use platform</h1>
              <p className={classes.leadpara}>Simplify and streamline your processes. Scale with agility and flexibility as you plan, consolidate, analyse, and report. With JustPerform, move your business performance management into high gear now. </p>
              <p><Button variant="primary">Book a Demo</Button></p>
            </Col>
          </Row>
        </Container>

        <Container className='mt-5 mb-5'>
          <Row>
            <Col md={12}>
              {/* <img src='../../images/demoCarousel-1.png' className='img-fluid' /> */}
              <Carousel variant="dark" indicators={true} controls={false} className='bannerCarousel'>
                <Carousel.Item>
                  <img src='../../images/banner-home1.svg' className='img-fluid' />
                  {/* <Image src="../../images/demoCarousel-1.png" className='img-fluid' layout='fill' alt="..." /> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img src='../../images/banner-home2.svg' className='img-fluid' />
                </Carousel.Item>
                <Carousel.Item>
                  <img src='../../images/banner-home3.svg' className='img-fluid' />
                </Carousel.Item>

              </Carousel>
            </Col>
          </Row>
        </Container>
      </Section>




      {/* <div className={classes.leadingCompanies}></div> */}
      <Section className={`${classes.leadingCompanies} ${['sectionBg-SkyBlue']}`}>
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




      {/* Plateform Section*/}
      {/* <section className={classes.explorePlateform}></section> */}
      <Section className={`${classes.explorePlateform} ${['sectionBg-White']}`}>
        <Container>
          <Row className='align-items-center justify-content-between'>
            <Col lg={6} md={6}>
              <h2 className={`${'headingBold'} ${['mb-4']}`}>The cloud xP&A and financial close platform designed for modern business requirements</h2>
              <p className='leadpara'>Don't let inefficiencies of legacy solutions hold you back. Leverage new thinking and smart technology to enhance your decision-making.</p>
              <p className='leadpara'>Experience the power of a process-first approach, an intuitive user experience, and robust governance capabilities for increased performance across your enterprise.</p>
              <Button variant="primary" className={`${['mt-3']} ${['mb-3']}`}>EXPLORE PLATFORM</Button>
            </Col>

            <Col lg={5} md={6}>
              <Card className={classes.plateformCard}>
                <Card.Body>
                  <img src='../../images/icon-processFirst.svg' />
                  <Card.Title className={classes.plateformCardTitle}>Process-First</Card.Title>
                  <Card.Text className={classes.plateformCardText}>
                    Take the simplest, fastest route to results by working directly with your processes
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={classes.plateformCard}>
                <Card.Body>
                  <img src='../../images/icon-intuitiveUser.svg' />
                  <Card.Title className={classes.plateformCardTitle}>Intuitive User Experience</Card.Title>
                  <Card.Text className={classes.plateformCardText}>
                    Let the platform guide you step by step with prompts and checks to stay error-free and on track
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={classes.plateformCard}>
                <Card.Body>
                  <img src='../../images/icon-robustGovernance.svg' />
                  <Card.Title className={classes.plateformCardTitle}>Robust Governance</Card.Title>
                  <Card.Text className={classes.plateformCardText}>
                    Empower users to make changes they need, while you keep granular control over authorisations
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>





      {/* Solution Section*/}
      <Section className={`${classes.solutions} ${['sectionBg-IrisBlue']}`}>
        <Container>
          <Row>
            <Col md={12} className='text-center text-white'>
              <h2 className='headingLight'>Unified Enterprise Performance Management</h2>
              <h3 className='headingBold'>All your EPM in one place, not all over the place</h3>
            </Col>
          </Row>
          <Row className='mt-5'>
            {DUMMY_DATA_EMP.map((crd) => {
              return (
                <Col lg md={6} key={crd.id}>
                  <Cards className={classes.solutionsCard}
                    key={crd.id}
                    image={crd.image}
                    title={crd.title}
                    description={crd.description}
                  />
                </Col>
              )
            })}
          </Row>
          <Row className='mt-3 text-center'>
            <Col md={12}>
              <Button variant='light' className='btnLight'>SEE OUR SOLUTIONS</Button>
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




      {/* Customer Speak Section */}
      <Section className={`${classes.custCarousel} ${['sectionBg-Gradient']}`}>
        <Container>
          {/** CustomerSpeak Component */}
          <CustomerSpeak />

        </Container>
      </Section>





      {/* EPM Section */}
      <Section className={`${classes.epm} ${['sectionBg-SkyBlue2']}`}>
        <Container>
          <Row>
            <Col md={12} className='text-center'>
              <h2 className='headingLight'>Get easy, effective EPM with JustPerform</h2>
              <h3 className='headingBold'>Take control of your enterprise performance management</h3>
            </Col>
          </Row>

          {/* <Row className='mt-5 align-items-center'>
            <Col md={6}>
              <h2 className='headingBold'>One solution, multiple uses </h2>
              <p className='leadparaBorderd'>The all-in-one platform for your business performance management and custodian of your planning, financial close, and reporting processes.</p>
            </Col>
            <Col md={6}>
              <img src='../../images/empImg1.png' className='img-fluid' />
            </Col>
          </Row> */}

          <RightImageDesc className='mt-5'
            title='One solution, multiple uses'
            description='The all-in-one platform for your business performance management and custodian of your planning, financial close, and reporting processes.'
            image='../../images/empImg1.svg'
          />

        </Container>
      </Section>



      <Section className={`${['sectionBg-White']}`}>
        <Container>
          {/* <Row className='align-items-center'>
            <Col md={6}>
              <img src='../../images/empImg2.png' className='img-fluid' />
            </Col>
            <Col md={6}>
              <h2 className='headingBold'>Have it your way </h2>
              <p className='leadparaBorderd'>It’s your EPM platform. Set it up and run it like you want. No more external dependencies. No more uncontrolled complexities. Just you, your users, and enterprise-wide performance.</p>
            </Col>
          </Row>

          <Row className='mt-5 align-items-center'>
            <Col md={6}>
              <h2 className='headingBold'>Get started fast  </h2>
              <p className='leadparaBorderd'>Skip the learning curve. You know Excel? Then you’ll rock with JustPerform. Our smart, high-performance technology also lets everyone accelerate to results.</p>
            </Col>
            <Col md={6}>
              <img src='../../images/empImg3.png' className='img-fluid' />
            </Col>
          </Row> */}

          <LeftImageDesc
            title='Have it your way'
            description='Its your EPM platform. Set it up and run it like you want. No more external dependencies. No more uncontrolled complexities. Just you, your users, and enterprise-wide performance.'
            image='../../images/empImg2.svg'
          />

          <RightImageDesc className='mt-5'
            title='Get started fast'
            description='Skip the learning curve. You know Excel? Then you wll rock with JustPerform. Our smart, high-performance technology also lets everyone accelerate to results.'
            image='../../images/empImg3.svg'
          />


        </Container>
      </Section>





      {/* <section className={classes.roadMap}></section> */}
      <Section className={`${classes.roadMap} ${['sectionBg-Gray']}`}>
        <Container>
          <Row className='align-items-center justify-content-between'>
            <Col md={6} className='text-center'>
              <img src='../../images/imgRoadmap.svg' className='img-fluid' />
            </Col>
            <Col md={5}>
              <h2 className='headingBold'>Your route map to success</h2>
              <p className={classes.leadpara}>Our guided workflows and process flows show you the quickest, most efficient route to success in budgeting, financial closing, and more.</p>
            </Col>
          </Row>
        </Container>
      </Section>



      {/* <section className={classes.roadMapSub}></section> */}
      <Section className={`${classes.roadMapSub} ${['sectionBg-White']}`}>
        <Container>
          {/* <Row className='align-items-center justify-content-between'>
            <Col md={5}>
              <h2 className='headingBold'>Built for business teams</h2>
              <p className='leadparaBorderd'>Our EPM experts designed JustPerform, so that your business leaders and users can work with one brilliantly smart and easy-to-use platform for optimal enterprise performance management.</p>
            </Col>
            <Col md={6}>
              <img src='../../images/imgRoadmap2.png' className='img-fluid' />
            </Col>
          </Row> 
          <Row className='mt-5 align-items-center justify-content-between'>
            <Col md={6}>
              <img src='../../images/imgRoadmap3.png' className='img-fluid' />
            </Col>
            <Col md={5}>
              <h2 className='headingBold'>Boost ROI. Achieve MORE </h2>
              <p className='leadparaBorderd'>Get higher return on investment. Save time. Wow your stakeholders. Let JustPerform take care of chores like data preparation, configuration, and coding, while you achieve valuable results for your enterprise.</p>
            </Col>
          </Row>
          */}

          <RightImageDesc
            title='Built for business teams'
            description='Our EPM experts designed JustPerform, so that your business leaders and users can work with one brilliantly smart and easy-to-use platform for optimal enterprise performance management.'
            image='../../images/imgRoadmap2.svg'
          />

          <LeftImageDesc className='mt-5'
            title='Boost ROI. Achieve MORE'
            description='Get higher return on investment. Save time. Wow your stakeholders. Let JustPerform take care of chores like data preparation, configuration, and coding, while you achieve valuable results for your enterprise.'
            image='../../images/imgRoadmap3.svg'
          />

        </Container>
      </Section>




      {/** FooterContact Component
      <FooterContact /> */}


    </>
  )
}



// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1
//   }; 
// }



export default HomePage;