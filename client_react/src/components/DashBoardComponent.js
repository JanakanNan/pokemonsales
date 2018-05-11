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
                    <HotSalesComponent/>
                    <div className={"dash-Item"}>
                        <Row>
                            <h2>Nouveautés</h2>
                        </Row>
                            <ItemComponent/>
                    </div>
                </div>
            </div>

        );
    }
}

export default DashBoardComponent;