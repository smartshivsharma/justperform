import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Category.module.css';

const CategoryTitle = (props) => {
  return (
    <>
    <Row className={`${classes.categoryTitle} ${['g-0']} ${['align-items-center']}`}>
        <Col md={8}>
            <h3>{props.title}</h3>
        </Col>
        <Col md={4} className={classes.vewAll}>
            {props.viewAll}
        </Col>
    </Row>
    </>
  )
}

export default CategoryTitle