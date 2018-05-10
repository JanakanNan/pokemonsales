import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import CarouselComponent from './CarouselComponent';
import HotSalesComponent from './HotSalesComponent';
import ItemComponent from './ItemComponent';



class DashBoardComponent extends Component {

    render() {
        return (
            <div>
                <CarouselComponent/>
                <div className="hot-sales-container">
                    <Row>
                        <Col xs={12} md={4}>
                            <HotSalesComponent/>
                        </Col>
                        <Col xs={12} md={4}>
                            <HotSalesComponent/>
                        </Col>
                        <Col xs={12} md={4}>
                            <HotSalesComponent/>
                        </Col>
                    </Row>
                    <div className={"dash-Item"}>
                        <Row>
                            <h2>Nouveautés</h2>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <ItemComponent/>
                            </Col>
                            <Col xs={12} md={2}>
                                <ItemComponent/>
                            </Col>
                            <Col md={2}>
                                <ItemComponent/>
                            </Col>
                            <Col md={2}>
                                <ItemComponent/>
                            </Col>
                            <Col md={2}>
                                <ItemComponent/>
                            </Col>
                            <Col md={2}>
                                <ItemComponent/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        );
    }
}

export default DashBoardComponent;