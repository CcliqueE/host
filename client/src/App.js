import './App.css';
import React from 'react'

import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function NavBar() {
  return (
    <div>
      <Navbar className="navBar">
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl type="password" placeholder="Password" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
