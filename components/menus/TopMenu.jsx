import React from 'react';
import { useRouter } from 'next/router';
import { Nav, Button, NavDropdown, Container, Row, Col } from 'react-bootstrap';


const TopMenu = () => {

    const router = useRouter();

    function contactNavHandler() {
        router.push('../contact-us');
    }

    function loginNavHandler() {
        router.push('../login');
    }

    return (
        <>
            <Nav>
                {/* <Nav.Link href="../platform" className={router.pathname == "/platform" ? "active" : ""}>Platform</Nav.Link> */}

                {/* <Nav.Link href="../platform" >Platform</Nav.Link>
                <Nav.Link href="../solutions/">Solutions</Nav.Link>
                <Nav.Link href="../services/">Services</Nav.Link>
                <Nav.Link href="../customers">Customers</Nav.Link>
                <Nav.Link href="../resources">Resources</Nav.Link>
                <Nav.Link href="../company/">Company</Nav.Link>
                <Nav.Link href="../free-trial">Free Trial</Nav.Link> */}



                {/* <Nav.Link href="../platform" >Platform</Nav.Link> */}
                <NavDropdown title="Platform">
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
                                            <NavDropdown.Item href="../platform">User Experience</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform">Technology</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform">Modeling</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform">Integrations</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform">Governance</NavDropdown.Item>
                                            <NavDropdown.Item href="../platform">Analytics & Reporting</NavDropdown.Item>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown>


                <NavDropdown title="Solutions">
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
                                            <p  className='navTitle'>Use Cases</p>
                                            <NavDropdown.Item href="../solutions/">Solutions</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/extended-planning-and-analysis">Extended Planning & Analysis</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/consolidation">Consolidation</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/profitability-analysis">Profitabilty Analysis</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/intelligent-forecasting">Intelligent Forecasting</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/excel-infinity">Excel Infinity</NavDropdown.Item>
                                            <NavDropdown.Item href="../solutions/alm-for-sap-solutions">ALM for SAP EPM Suite</NavDropdown.Item>
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


                <Nav.Link href="../services/">Services</Nav.Link>

                <Nav.Link href="../customers">Customers</Nav.Link>


                {/* <Nav.Link href="../resources">Resources</Nav.Link> */}
                <NavDropdown title="Resources">
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
                </NavDropdown>


                {/* <Nav.Link href="../company/">Company</Nav.Link> */}
                <NavDropdown title="Company" id='navCompany'>
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
                </NavDropdown>


                <Nav.Link href="../free-trial">Free Trial</Nav.Link>


                <Button variant="outline-info" className='btn-login' onClick={loginNavHandler}>LOGIN</Button>
                <Button variant="info" className='btn-contact' onClick={contactNavHandler}>CONTACT US</Button>
            </Nav>





        </>

    )
}

export default TopMenu;