import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';


const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(false);

  function handleSubmit() {
    var data = {"email": email,"password":password};
    axios.post('http://localhost:8082/login', data)
        .then(res => {
          if (res == 200) {
            setAuth(true);
          }
          console.log(res);
        })
        .catch(err => {
          console.log("Error!");
        })
    event.preventDefault();
  }

  const AdminLogin = (

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
  );

  const AdminPortal = (
    <p>Successfull Login</p>
  )

  return (
    <body>
    <Container className="p-3">
    <h1 className="jumbotron">Blog Template</h1>
    {isAuth ? AdminPortal : AdminLogin}
    </Container>
    </body>
  )
};

export default Admin;
