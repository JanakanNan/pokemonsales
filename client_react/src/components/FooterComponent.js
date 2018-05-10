import React, { Component } from 'react';

import { Navbar, Nav, NavItem,FormGroup,FormControl, Button, Glyphicon } from 'react-bootstrap';

class FooterComponent extends Component {

    render() {
        return (
            <div className="white-bar">
                <ul className={"nav nav-bottom-left"}>
                    <li className="nav-item">
                        <a eventKey={1} href='/' >© PokeSales 2018</a>
                        <span>|</span>
                    </li>
                    <li className="nav-item">
                        <a eventKey={1} href='#' >Terms of Use</a>
                        <span>|</span>
                    </li>
                    <li className="nav-item">
                        <a eventKey={1} href='/boutique' >Privacy Policy</a>
                        <span>|</span>
                    </li>
                    <li className="nav-item">
                        <a eventKey={1} href='#' >Legal Info</a>
                        <span>|</span>
                    </li>
                    <li className="nav-item">
                        <a eventKey={1} href='#' >Site Map</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FooterComponent;