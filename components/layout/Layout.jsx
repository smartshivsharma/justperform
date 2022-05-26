import React from 'react'
//import { Container } from 'react-bootstrap';
import classes from './Layout.module.css'
import Header from './Header';
import Footer from './Footer';

import FooterContact from './FooterContact';


const Layout = (props) => {
  return (
    <>
      {/* <Container> */}
      <Header />
      <div className={classes.mainLayout}>
        {props.children}
      </div>
      <FooterContact />
      <Footer />
      {/* </Container> */}
    </>
  );
}

export default Layout;