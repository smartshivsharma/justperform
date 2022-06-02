import React from 'react';
import Link from "next/link";

import { Row, Col, Card } from "react-bootstrap";

import classes from './LegacyModern.module.css';


function LegacyModern(props) {
  // return <div className={classes.card}>{props.children}</div>;
  return (
    <>

      <Row className={`${['justify-content-center']} ${['align-items-center']} ${['mb-3']} ${props.className}`}>
        <Col lg={5} md={5}>
          <div className={classes.legacyBx}>
            <div className={classes.vMid}>
              {props.legacyTitle}
            </div>
          </div>
        </Col>
        <Col lg={1} md={1} className={classes.leArrow}>
          <i class="las la-angle-right"></i>
        </Col>
        <Col lg={5} md={5}>
          <Card className={classes.modernCard}>
            <Card.Body className={classes.modernCardBody}>
              <Row className='align-items-center g-0'>
                <Col md={2} xs={2}>
                  <img src={props.image} className={`${classes.modernCardImg} ${['img-fluid']}`} />
                </Col>
                <Col md={10} xs={10}>
                  <Card.Text> {props.modernTitle} </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </>
  )
}

export default LegacyModern;