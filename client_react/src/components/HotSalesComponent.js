import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';


class DashboardComponent extends Component {



    render() {
        return (
            <Row>
                <Col xs={12} md={4}>
                    <Panel className={"hot-sales"}>
                        <Panel.Body>
                            <h2>Ne manquez pas nos promotions légendaires</h2>
                            <img src="/img/pokexemple.jpg" alt=""/>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col xs={12} md={4}>
                    <Panel className={"hot-sales"}>
                        <Panel.Body>
                            <h2>La meilleur séléction de pokeballs du marché</h2>
                            <img src="/img/pokeball2.jpg" alt=""/>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col xs={12} md={4}>
                    <Panel className={"hot-sales"}>
                        <Panel.Body>
                            <h2>Voyagez sereinement grace à nos kits de voyage</h2>
                            <img src="/img/mapPoke.jpg" alt=""/>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>

        );
    }
}

export default DashboardComponent;