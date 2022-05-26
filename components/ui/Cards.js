import React from 'react';
import Link from "next/link";

import { Card } from "react-bootstrap";

import classes from './Card.module.css';


function Cards(props) {
  // return <div className={classes.card}>{props.children}</div>;
  return (
    <>
      <Card className={`${classes.card} ${props.className}`}>
        <Card.Body>
          <div className={classes.cardImage}><img src={props.image}  /></div>
          <Card.Title className={classes.cardTitle}>{props.title}</Card.Title>
          <Card.Title className={classes.cardSubTitle}>{props.subTitle}</Card.Title>
          <Card.Text className={classes.cardText}>
            {props.description}
          </Card.Text>
        </Card.Body>
        
        <Card.Footer className={`${classes.cardFooter} ${props.linkAlign}`}>
          <Link href={`${props.link}`}><a>{props.linkTitle} {/*<i className="fa fa-long-arrow-right" aria-hidden="true"></i>*/}</a></Link>
        </Card.Footer>

      </Card>
    </>
  )
}

export default Cards;