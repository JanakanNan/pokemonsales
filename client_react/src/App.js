import React, { Component } from 'react';
import './App.css';

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
			<HotSalesComponent/>
			<Grid>
				<Row>
					<div className={"dash-Item"}>
						<Col md={2}>
							<ItemComponent/>
						</Col>
					</div>
				</Row>
			</Grid>


        </body>
    );
  }
}

export default App;