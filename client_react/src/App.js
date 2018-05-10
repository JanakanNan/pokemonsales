import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import CarouselComponent from "./components/CarouselComponent";
import HotSalesComponent from "./components/HotSalesComponent";
import NavBarComponent from "./components/NavBarComponent";
import ItemComponent from "./components/ItemComponent";
import ItemformComponent from "./components/ItemformComponent";

class App extends Component {

	render() {
		return (
				<div>
	        <NavBarComponent/>
					<BrowserRouter>
						<div>
				      <Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
				      <Route path="/boutique" component={ItemComponent} exact={true} strict={true}/>
						</div>
					</BrowserRouter>
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
							<ItemComponent/>
						</div>
					</div>
				</div>
    );
  }
}

export default App;
