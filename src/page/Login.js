import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate("/")
  };
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={(event) => loginUser(event)}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue="example@example.com"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" defaultValue="123456" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
