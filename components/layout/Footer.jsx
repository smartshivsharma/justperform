import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import classes from './Footer.module.css'

import SocialMenu from "../menus/SocialMenu";
import LegalMenu from "../menus/LegalMenu";
import FooterMenu from "../menus/FooterMenu";

const Footer = () => {

    return (
        <>
            {/* <h1>Footer</h1> */}
            <Container>

                <div className={classes.footerMenus}>
                    {/** FooterMenu Component  */}
                    <FooterMenu />
                </div>

                <Row>
                    <Col md={12} className='text-center'>
                        {/** SocialMenus Component  */}
                        <SocialMenu /> 
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className={classes.copyright}>
                        {/** LegalMenu Component  */}
                        <LegalMenu />
                    </Col>
                </Row>


            </Container>


            {/* className={`${classes.socialLink} ${classes[list-inline]} ${classes[mb-0]}`} for abc.module.css*/}
            {/* className={`${classes.socialLink} ${['list-inline']} ${['mb-0']}`} for global.css*/}

        </>

    )
}

export default Footer;