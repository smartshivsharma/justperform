import React from 'react';
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


const Login = () => {

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md={12}>
            <h2>Login</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login;