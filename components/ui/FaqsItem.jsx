import React from 'react';
import { Accordion } from "react-bootstrap";

import classes from './Faqs.module.css';


const FaqsItem = (props) => {
    return (
        <>
            <Accordion.Item className={classes.item} eventKey={props.eventKey}>
                <Accordion.Header className={classes.title}>{props.ques}</Accordion.Header>
                <Accordion.Body>
                    {props.ans}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default FaqsItem