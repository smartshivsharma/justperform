import React from 'react';
import Link from "next/link";
import { Row, Col} from "react-bootstrap";
import classes from '../layout/Footer.module.css'

const FooterMenu = () => {

    return (
        <>
            <Row className="justify-content-between">
                <Col lg={2} md={2} className={classes.footerLogo}>
                    <img src='../../images/footerLogo1.svg' className="img-fluid" />
                </Col>

                <Col lg={8} md={8} >
                    <Row>
                        <Col lg={3} md={6} xs={6}>
                            <h3>Platform</h3>
                            <ul className="list-unstyled">
                                <li><Link href="../platform/">Why JustPerform</Link></li>
                                <li><Link href="../platform/">Key Capabilities</Link></li>
                                <li><Link href="../platform/">Integrations</Link></li>
                                <li><Link href="../platform/">JustPerform Apps</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} xs={6}>
                            <h3>Solutions</h3>
                            <ul className="list-unstyled">
                                <li><Link href="../solutions/extended-planning-and-analysis">xP&A</Link></li>
                                <li><Link href="../solutions/consolidation">Consolidation</Link></li>
                                <li><Link href="../solutions/profitability-analysis">Profitability Analysis</Link></li>
                                <li><Link href="../solutions/intelligent-forecasting">Intelligent Forecasting</Link></li>
                                <li><Link href="../solutions/excel-infinity">Excel Infinity</Link></li>
                                <li><Link href="../solutions/alm-for-sap-solutions"> Embedded for SAP EOM</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} xs={6}>
                            <h3>Services</h3>
                            <ul className="list-unstyled">
                                <li><Link href="../services/">Our Approach</Link></li>
                                <li><Link href="../services/">Our Experts</Link></li>
                                <li><Link href="../services/">Our Support</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} xs={6}>
                            <h3>Company</h3>
                            <ul className="list-unstyled">
                                <li><Link href="../company/">Our Vision</Link></li>
                                <li><Link href="../company/">Our Values</Link></li>
                                <li><Link href="../company">Our Teams</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>

                <Col lg={2} md={2} xs={6}>
                    {/* <h3><Link href="../contact-us">Contact Us</Link></h3>
                    <h3><Link href="../book-demo">Book a Demo</Link></h3>
                    <h3><Link href="../free-trial">Free Trial</Link></h3> */}

                    <h3><Link href="mailto:contact@justperform.com">Contact Us</Link></h3>
                    <h3><Link href="mailto:contact@justperform.com">Book a Demo</Link></h3>
                    <h3><Link href="mailto:contact@justperform.com">Free Trial</Link></h3>
                </Col>
            </Row>
        </>

    )
}

export default FooterMenu;