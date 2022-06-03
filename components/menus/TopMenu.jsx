import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { Nav, Button, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


const TopMenu = () => {

    const router = useRouter();

    function contactNavHandler() {
        router.push('../contact-us');
    }

    function loginNavHandler() {
        router.push('../login');
    }

    function mailtoHandler() {
        router.push('mailto:contact@justperform.com');
    }


    /**************** show menu on mouse hover********************* */
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }




    return (
        <>
            <Nav>
                {/* <Nav.Link href="../platform" className={router.pathname == "/platform" ? "active" : ""}>Platform</Nav.Link> */}

                {/* <Link href="/">
                    <a className={router.pathname == "/" ? "navActive" : ""}>
                        Home
                    </a>
                </Link> */}

                {/* <Nav.Link href="../platform" >Platform</Nav.Link>
                <Nav.Link href="../solutions/">Solutions</Nav.Link>
                <Nav.Link href="../services/">Services</Nav.Link>
                <Nav.Link href="../customers">Customers</Nav.Link>
                <Nav.Link href="../resources">Resources</Nav.Link>
                <Nav.Link href="../company/">Company</Nav.Link>
                <Nav.Link href="../free-trial">Free Trial</Nav.Link> */}


                {/* <Link href="/" passHref>
                    <Nav.Link >Home</Nav.Link>
                </Link> */}

                <Link href="../platform/" passHref>
                    <Nav.Link >Platform</Nav.Link>
                </Link>
                {/* <NavDropdown title="Platform">
                    <Container>
                        <Row>
                            <Col lg={6} style={{ backgroundColor: '#E8F1F7' }}>
                                <div className='dropNavBoxLeft'>
                                    <img src='../../images/img-nav1.svg' className='img-fluid' />
                                    <p className='bpara'>Why JustPerform</p>
                                    <p>Lorem ipsum dolor sit amet sit dolor, consectetur dolor adipiscing sit elit.</p>
                                    <p className='learnMore'>LEARN MORE </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Row className='g-0'>
                                    <Col lg>
                                        <div className='dropNavBoxRight'>
                                            <NavDropdown.Item href="../platform/">User Experience</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform/">Technology</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform/">Modeling</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform/">Integrations</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform/">Governance</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform/">Analytics & Reporting</NavDropdown.Item>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown> for second version*/}


                <NavDropdown title="Solutions" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                    <Container>
                        <Row>
                            <Col lg={6} style={{ backgroundColor: '#E8F1F7' }}>
                                <div className='dropNavBoxLeft'>
                                    <img src='../../images/img-nav1.svg' className='img-fluid' />
                                    <p className='bpara'>Why JustPerform</p>
                                    <p>Lorem ipsum dolor sit amet sit dolor, consectetur dolor adipiscing sit elit.</p>
                                    <p className='learnMore'>LEARN MORE </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Row className='g-0'>
                                    <Col lg={12}>
                                        <div className='dropNavBoxRight'>
                                            <Link href="../solutions/" passHref>
                                                <NavDropdown.Item className='navTitle'>SOLUTIONS</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/extended-planning-and-analysis" passHref>
                                                <NavDropdown.Item>Extended Planning & Analysis</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/consolidation" passHref>
                                                <NavDropdown.Item>Consolidation</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/profitability-analysis" passHref>
                                                <NavDropdown.Item >Profitabilty Analysis</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/intelligent-forecasting" passHref>
                                                <NavDropdown.Item>Intelligent Forecasting</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/excel-infinity" passHref>
                                                <NavDropdown.Item>Excel Infinity</NavDropdown.Item>
                                            </Link>
                                            <Link href="../solutions/alm-for-sap-solutions" passHref>
                                                <NavDropdown.Item>ALM for SAP EPM Suite</NavDropdown.Item>
                                            </Link>
                                        </div>
                                    </Col>
                                    {/* <Col lg={4}>
                                        <p>Industry</p>
                                        <NavDropdown.Item href="#action/3.1">Automotive</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">IT & IT Services</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Utilities</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Agriculture & Farming</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Telecommunications</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Health Care</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Hospitality</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Real Estate</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Retail</NavDropdown.Item>
                                    </Col>
                                    <Col lg={4}>
                                        <p>Department</p>
                                        <NavDropdown.Item href="#action/3.1">Finance</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Sales</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Supply Chain</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Human Resource</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Marketing</NavDropdown.Item>
                                    </Col> */}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown>


                <Link href="../services/" passHref>
                    <Nav.Link>Services</Nav.Link>
                </Link>


                {/* <Nav.Link href="../customers">Customers</Nav.Link> for second version*/}


                {/* <Nav.Link href="../resources">Resources</Nav.Link> for second version */}
                {/* <NavDropdown title="Resources">
                    <Container>
                        <Row>
                            <Col lg={6} style={{ backgroundColor: '#E8F1F7' }}>
                                <div className='dropNavBoxLeft'>
                                    <img src='../../images/img-nav1.svg' className='img-fluid' />
                                    <p className='bpara'>Why JustPerform</p>
                                    <p>Lorem ipsum dolor sit amet sit dolor, consectetur dolor adipiscing sit elit.</p>
                                    <p className='learnMore'>LEARN MORE </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Row className='g-0'>
                                    <Col lg>
                                        <div className='dropNavBoxRight'>
                                            <NavDropdown.Item href="../resources">Blogs</NavDropdown.Item>
                                            <NavDropdown.Item href="../resources">Webinars & Events</NavDropdown.Item>
                                            <NavDropdown.Item href="../resources">Resoruce Center</NavDropdown.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown> for second version*/}


                <Link href="../company/" passHref>
                    <Nav.Link>Company</Nav.Link>
                </Link>
                {/* <NavDropdown title="Company" id='navCompany'>
                    <Container>
                        <Row>
                            <Col lg={6} style={{ backgroundColor: '#E8F1F7' }}>
                                <div className='dropNavBoxLeft'>
                                    <img src='../../images/img-nav1.svg' className='img-fluid' />
                                    <p className='bpara'>Why JustPerform</p>
                                    <p>Lorem ipsum dolor sit amet sit dolor, consectetur dolor adipiscing sit elit.</p>
                                    <p className='learnMore'>LEARN MORE </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Row className='g-0'>
                                    <Col lg>
                                        <div className='dropNavBoxRight'>
                                            <NavDropdown.Item href="../company/">Leadership</NavDropdown.Item>
                                            <NavDropdown.Item href="../company/">Careers</NavDropdown.Item>
                                            <NavDropdown.Item href="../company/">Newsroom</NavDropdown.Item>
                                            <NavDropdown.Item href="../company/">Partners</NavDropdown.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown> for second version */}


                <Link href="../free-trial" passHref>
                    <Nav.Link>Free Trial</Nav.Link>
                </Link>


                <Button variant="outline-info" className='btn-login' onClick={loginNavHandler}>LOGIN</Button>
                {/* <Button variant="info" className='btn-contact' onClick={contactNavHandler}>CONTACT US</Button> */}
                <Button variant="info" className='btn-contact' onClick={mailtoHandler}>CONTACT US</Button>

                {/* <Link href='mailto:contact@justperform.com' className='btn btn-outline-info btn-login' onClick={loginNavHandler}>LOGIN</Link>
                <Link href='mailto:contact@justperform.com' className='btn btn-info btn-contact' onClick={contactNavHandler}>CONTACT US</Link> */}
            </Nav>





        </>

    )
}

export default TopMenu;