import React, { Component } from 'react';

import { Navbar, Nav, NavItem,FormGroup,FormControl, Button } from 'react-bootstrap';


class NavBarComponent extends Component {

    render() {
        return (

            <body>
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#Home">Pokebuy</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem eventKey={1} href='#'>
                        Shop
                    </NavItem>
                    <NavItem eventKey={1} href='#'>
                        Profile
                    </NavItem>
                    <NavItem eventKey={1} href='#'>
                        Caddie
                    </NavItem>
                </Nav>
            </Navbar>
            </body>
        );
    }
}

export default NavBarComponent;