import React, { Component } from 'react';

import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';


class CarouselComponent extends Component {



    render() {
        return (
            <div className={"fluid"}>
                <Carousel>
                    {/*TODO Dynamic CarouselItems*/}
                    <CarouselItem>
                        <img ressponsive alt="900x500" height={150} src="/img/waterPoke.png" />
                        <Carousel.Caption>
                            <h2>Partez à l'aventure</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    {/*END TODO*/}
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;