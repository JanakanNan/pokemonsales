import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
<<<<<<< HEAD
import DashbordComponent from './components/DashboardComponent';
import ItemformComponent from './components/ItemformComponent';
=======
import CarouselComponent from './components/CarouselComponent';
import HotSalesComponent from './components/HotSalesComponent';
import ItemComponent from "./components/ItemComponent";
>>>>>>> 77523a4b14d35e49bdfad0bf3743cefbedf15fbd

class App extends Component {

	render() {
		return (
<<<<<<< HEAD
			<BrowserRouter>
				<div className="App">
						<NavBarComponent/>
						<div>
							<Route path="/" component={DashbordComponent} exact={true} strict={true}/>
							<Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
						</div>
=======
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

>>>>>>> 77523a4b14d35e49bdfad0bf3743cefbedf15fbd

        </div>
				</BrowserRouter>
    );
  }
}

export default App;
