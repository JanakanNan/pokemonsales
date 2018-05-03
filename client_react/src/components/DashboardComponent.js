import React, { Component } from 'react';

import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';


class DashboardComponent extends Component {



    render() {
        return (
            <div fluid>
                <Carousel>
                    <CarouselItem>
                        <img ressponsive alt="900x500" height={150} src="/img/pokexemple.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
                <Grid>
                    <Row>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DashboardComponent;