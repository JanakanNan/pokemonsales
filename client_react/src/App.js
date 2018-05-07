import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import CarouselComponent from './components/CarouselComponent';
import HotSalesComponent from './components/HotSalesComponent';
import ItemComponent from "./components/ItemComponent";

class App extends Component {

	render() {
		return (
		<body>
            <NavBarComponent/>
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
			</Grid>


        </div>
				</BrowserRouter>
				</div>
			</div>
        </body>
    );
  }
}

export default App;
