import React, { useState } from 'react';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
//import { NavLink } from 'react-bootstrap';
//import MainMenu from './MainMenu';
import TopMenu from '../menus/TopMenu';


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      {/* <h1>Header 1</h1> */}
      <header>
        <Container>

          {/** For Desktop */}
          <Navbar expand="lg" >
            <Navbar.Brand href="/">
              <div className='logo'>
                <img src='../../images/logo.svg' />
              </div>
            </Navbar.Brand>
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
              <Offcanvas.Title>Menu</Offcanvas.Title>
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