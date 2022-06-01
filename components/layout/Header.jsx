import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
//import { NavLink } from 'react-bootstrap';
//import MainMenu from './MainMenu';
import TopMenu from '../menus/TopMenu';

import classes from './Header.module.css';


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])




  return (
    <>
      {/* <h1>Header 1</h1> */}
      {/* <header className={scroll ? "main-header scrolled" : "main-header"}></header> */}


      <header className={scroll ? "mainHeaderActive" : "mainHeader"}> 

        <Container>

          {/** For Desktop */}
          <Navbar expand="lg" >
            <Link  href="/" passHref>
            <Navbar.Brand>
              <div className='logo'>
                <img src='../../images/logo.svg' />
              </div>
            </Navbar.Brand>
            </Link>

            <Navbar.Toggle onClick={handleShow} />
            <Navbar.Collapse id="main-nav" className="justify-content-end d-none d-lg-block">
              {/**MainMenu Component */}
              {/* <MainMenu /> */}
              <TopMenu />

            </Navbar.Collapse>
          </Navbar>


          {/** For Mobile */}
          <Offcanvas show={show} onHide={handleClose} className="d-block d-lg-none">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className='logo'>
                  <img src='../../images/logo.svg' />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Navbar id="main-nav" className="pt-0">

                {/**MainMenu Component */}
                {/* <MainMenu /> */}
                <TopMenu />

              </Navbar>

            </Offcanvas.Body>
          </Offcanvas>


        </Container>
      </header>

    </>

  )
}

export default Header;