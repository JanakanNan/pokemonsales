import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';


class DashboardComponent extends Component {



    render() {
        return (
            <div className={"fluid"}>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <Panel>
                                <Panel.Body>
                                    Basic panel example
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col md={4}>
                            <Panel>
                                <Panel.Body>
                                    Basic panel example
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col md={4}>
                            <Panel>
                                <Panel.Body>
                                    Basic panel example
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DashboardComponent;