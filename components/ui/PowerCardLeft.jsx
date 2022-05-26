import React from 'react';
import Link from "next/link";
import { Row, Col, Card } from "react-bootstrap";
import classes from './PowerCardLeft.module.css';


function PowerCardLeft(props) {
    return (
        <>
            <Row className={`${['align-items-center']} ${['justify-content-center']} ${['g-0']} ${['mb-5']} ${props.className}`}>
                <Col lg={11} md={12}>
                    <Card className={classes.powerCard}>
                        <Card.Body className={classes.powerCardBody}>

                            <Row className='align-items-center'>
                                <Col lg={5} md={12} className={`${classes.powerCardImage}`}>
                                    <img src='../../images/img-finance.png' className={`${['img-fluid']}`} />
                                </Col>
                                <Col lg={7} md={12} className={classes.powerCardDetails} style={{'position':'relative'}}>
                                    {/* <div className='vMid'></div> */}
                                        <Card.Title className={classes.powerCardTitle}>
                                            {props.title}
                                        </Card.Title>
                                        <Card.Text className={classes.powerCardText}>
                                            {props.description}
                                        </Card.Text>
                                        {/* <ul>
                                        <li>{props.list1}</li>
                                        <li>{props.list2}</li>
                                        <li>{props.list3}</li>
                                        <li>{props.list4}</li>
                                    </ul> */}
                                    
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default PowerCardLeft;
