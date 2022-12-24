import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLayoutEffect } from "react";


function NavbarComp() {
      useLayoutEffect(() => {
        document.body.style.backgroundColor = "#012522"
        document.body.style.backgroundImage = `url('https://i.ibb.co/ky3wyT1/4614.png')`
        document.body.style.backgroundSize =  "500px 600px"
      });

    return (
      <div className="NavbarComp">
          <Navbar className="color-nav" expand="lg" variant="light">
            <Container>
              <Navbar.Brand style={{color:"white"}} href="#home">Unofficial ACE Placements</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                  <Nav.Link style={{color:"white"}} href="/list">List</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/list" element={<List/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default NavbarComp;
  