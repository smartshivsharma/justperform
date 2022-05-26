import React from 'react';
import Link from "next/link";
import { Row, Col, Card } from "react-bootstrap";
import classes from './PowerCardRight.module.css';


function PowerCardRight(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']}  ${['mb-5']} ${props.className}`}>
                <Col lg={11} md={12}>
                    <Card className={classes.powerCard}>
                        <Card.Body className={classes.powerCardBody}>
                            {/* <div className='vMid'></div> */}
                            <Row className='align-items-center'>
                                <Col lg={7} md={12} className={classes.powerCardDetails}>
                                    <Card.Title className={classes.powerCardTitle}>
                                        {props.title}
                                    </Card.Title>
                                    <Card.Text className={classes.powerCardText}>
                                        {props.description}
                                    </Card.Text>
                                    {/* <ul>
                                        <li>Revenue planning</li>
                                        <li>Operational expense planning</li>
                                        <li>Capital expenditure planning</li>
                                        <li>Balance sheet, profit & loss, and cash flow planning</li>
                                    </ul> */}
                                </Col>
                                <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                    <img src='../../images/img-finance.png' className={`${['img-fluid']}`} />
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default PowerCardRight;
