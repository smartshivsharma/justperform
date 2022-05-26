import React from 'react';
import { useRouter } from 'next/router';
import { Nav, Button } from 'react-bootstrap';


const TopMenu = () => {

    const router = useRouter();

    function contactNavHandler() {
        router.push('../contact-us');
    }

    function loginNavHandler(){
        router.push('../login');
    }

    return (
        <>
            <Nav>
                <Nav.Link href="../platform">Platform</Nav.Link>
                <Nav.Link href="../solutions">Solutions</Nav.Link>
                <Nav.Link href="../services/">Services</Nav.Link>
                <Nav.Link href="../customers">Customers</Nav.Link>
                <Nav.Link href="../resources">Resources</Nav.Link>
                <Nav.Link href="../company">Company</Nav.Link>
                <Nav.Link href="../free-trial">Free Trial</Nav.Link>

                <Button variant="outline-info" className='btn-login' onClick={loginNavHandler}>LOGIN</Button>
                <Button variant="info" className='btn-contact' onClick={contactNavHandler}>CONTACT US</Button>
            </Nav>
        </>

    )
}

export default TopMenu;