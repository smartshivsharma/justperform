import React from 'react';
import Link from "next/link";

import { Card } from "react-bootstrap";

import classes from './ListCard.module.css';


function ListCards(props) {
  // return <div className={classes.card}>{props.children}</div>;
  return (
    <>
      <Card className={`${classes.card} ${props.className}`}>
        <Card.Body className={classes.cardBody}>
          <div className={classes.vMid}>
            <img src={props.image} />
            <Card.Title className={classes.cardTitle}>{props.title}</Card.Title>
            {/* <Card.Title className={classes.cardSubTitle}>{props.subTitle}</Card.Title>
          <Card.Text className={classes.cardText}>
            {props.description}
          </Card.Text> */}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ListCards;