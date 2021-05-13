import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'
import SlideOne from './img/server-room1.jpg'
import SlideTwo from './img/server-room2.jpg'
import SlideThree from './img/server-room3.jpg'
import Outline from './img/home-outline-final.png'

import { Carousel, Navbar, Nav, Form, Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="container">
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

      <img className="outline" alt="outline" type="png/image" src={Outline}/>
      <div className='carousel' >  
        <Carousel className="owl-carousel owl-theme" interval={2500} keyboard={false} pauseOnHover={false}>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="d-block w-100"  
            src={SlideOne}/>  
            <Carousel.Caption>  
              <h3>First Demo</h3>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="d-block w-100"  
            src={SlideTwo}/>  
            <Carousel.Caption>  
              <h3>Second Demo</h3>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
            alt="first slide"
            className="d-block w-100"  
            src={SlideThree}/>  
            <Carousel.Caption>  
              <h3>Third Demos</h3>  
            </Carousel.Caption>  
          </Carousel.Item>          
        </Carousel>  
      </div>  
    </div>
  );
}

export default Home;
