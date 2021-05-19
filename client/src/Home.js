import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'
import SlideOne from './img/server-room1.jpg'
import SlideTwo from './img/server-room2.jpg'
import SlideThree from './img/server-room3.jpg'
import ArrowRight from './img/arrow-left.png'
import ArrowLeft from './img/arrow-right.png'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Carousel, Navbar, Nav, Form, Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="">
      <Navbar className="navBar" fixed="top" expand="md">
        <Navbar.Brand href="/">
          <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" bsPrefix="navbar-collapse" id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="Nav" href="/pricing">Pricing</Nav.Link>
            </Nav>
            <hr className="collapse-line" />
            <Form className="forms-home" inline>
                <input type="text" className="username" name="username" placeholder="Username.."/>
            </Form>
            <Form className="forms-home" inline>
              <input type="password" className="password" name="password" placeholder="Password.."/>
            </Form>
            <Button href="/register-login" type="submit">SignUp/Login</Button>
          </Navbar.Collapse>
      </Navbar>

      {/* End of consistent code */}

      <div className="container">
      <div className="carousel" >  
        <Carousel className="" keyboard={true} pauseOnHover={false}>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="carousel-img d-block w-100"  
            src={SlideOne}/>  
            <Carousel.Caption>  
              <h3>First Demo</h3>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="carousel-img d-block w-100"  
            src={SlideTwo}/>  
            <Carousel.Caption>  
              <h3>Second Demo</h3>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="carousel-img d-block w-100"  
            src={SlideThree}/>  
            <Carousel.Caption>  
              <h3>Third Demos</h3>  
            </Carousel.Caption>  
          </Carousel.Item>          
        </Carousel>  
      </div>
      </div>
      <div className="placeholder">
        <p>This is content</p>
      </div>

      {/* More consistent code */}

      <hr className="footer-hr" />
        <div className="footer-100">
            <h2>Links</h2>
            <ul className="footer-list">
                <li><a className="footer-link" href="/">about <AiOutlineInfoCircle/></a></li>
                <li><a className="footer-link" href="/pricing">pricing</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Home;
