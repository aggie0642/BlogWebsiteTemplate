import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import $ from 'jquery';
import BlogShell from "./components/BlogShell.js";
import MDEditor from '@uiw/react-markdown-editor';


const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [value, setValue] = React.useState("**Hello world!!!**");

  function handleSubmit(event) {
    var data = {"username": username,"password":password};
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:8082/login',
      method: 'POST',
      data: data,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      success: function(data, status) {
        console.log(data);
        setAuth(true);
      },
      error: function(data, status) {
        console.log(data.status + " " + data.responseText);
        setAuth(false);
      }
    });
  }

  const AdminLogin = (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
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

  function handleCreatePost(createPost) {}

  const AdminPortal = (
      <BlogShell />
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
