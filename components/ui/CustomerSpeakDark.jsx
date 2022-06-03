import React from 'react';

import { Row, Col, Card, Carousel } from 'react-bootstrap';

import classes from './CustomerSpeakDark.module.css';


const CustomerSpeakDark = () => {
    return (
        <>
            <Row className='justify-content-center custCarousel'>
                <Col lg={10} md={12}>
                    <Carousel variant="dark" indicators={false}>
                        <Carousel.Item>
                            <Card className={classes.custCard}>
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text className={classes.custCardText}>
                                        We are confident in Just Perform&apos;s capabilities to deliver successful planning. JustPerform&apos;s emphasis on defining effective and streamlined planning process seem pertinent in this CPM world.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.custCardFooter}>
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <img src='../../images/custLogo1.png' />
                                        </Col>
                                        <Col md={6} className={classes.author}>Valerie Foo, Senior Vice President of Finance</Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className={classes.custCard}>
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text className={classes.custCardText}>
                                        We are confident in Just Perform&apos;s capabilities to deliver successful planning. JustPerform&apos;s emphasis on defining effective and streamlined planning process seem pertinent in this CPM world.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.custCardFooter}>
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <img src='../../images/custLogo1.png' />
                                        </Col>
                                        <Col md={6} className={classes.author}>Valerie Foo, Senior Vice President of Finance</Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className={classes.custCard}>
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text className={classes.custCardText}>
                                        We are confident in Just Perform&apos;s capabilities to deliver successful planning. JustPerform&apos;s emphasis on defining effective and streamlined planning process seem pertinent in this CPM world.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={classes.custCardFooter}>
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <img src='../../images/custLogo1.png' />
                                        </Col>
                                        <Col md={6} className={classes.author}>Valerie Foo, Senior Vice President of Finance</Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>

                    </Carousel>

                </Col>
            </Row>
        </>
    )
}

export default CustomerSpeakDark