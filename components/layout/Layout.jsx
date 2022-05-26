import React from 'react'
//import { Container } from 'react-bootstrap';
import classes from './Layout.module.css'
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      {/* <Container> */}
      <Header />
      <div className={classes.mainLayout}>
        {props.children}
      </div>
      <Footer />
      {/* </Container> */}
    </>
  );
}

export default Layout;