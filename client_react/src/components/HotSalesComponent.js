import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';


class DashboardComponent extends Component {



    render() {
        return (
                <Panel className={"hot-sales"}>
                    <Panel.Body>
                        <h2>Ne manquez pas nos promotions légendaires</h2>
                        <img src="/img/pokexemple.jpg" alt=""/>
                    </Panel.Body>
                </Panel>
        );
    }
}

export default DashboardComponent;