import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import BlogShell from "./components/BlogShell.js";

const Home = () => (
  <body>
    <Container className="p-3">
      <Header />
      <Navbar titles="Home,Link 1,Link 2,Link 3"></Navbar>
      <h1 className="jumbotron">Blog Template</h1>
    </Container>

    <Container>
      <Row>
        <BlogShell title="Test"></BlogShell>
        <Sidebar />
      </Row>
    </Container>
  </body>
);

export default Home;
