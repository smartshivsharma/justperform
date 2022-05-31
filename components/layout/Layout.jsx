import React from 'react';
import Head from 'next/head';
//import { Container } from 'react-bootstrap';
import classes from './Layout.module.css'
import Header from './Header';
import Footer from './Footer';

import FooterContact from './FooterContact';


const Layout = (props) => {



  return (
    <>
      <Head>
        <title>The Fastest and Most Reliable Way to Deliver SAP BPC Implementations</title>
        <meta name="description"
          content="Red Apricot inspires businesses to transform enterprise performance management processes via an innovative technology-enabled solution methodology" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      
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