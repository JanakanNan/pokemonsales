import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import ItemComponent from "./components/ItemComponent";
import ItemformComponent from './components/ItemformComponent';
import DashboardComponent from "./components/DashBoardComponent";

class App extends Component {

	render() {
		return (
					<body>
			            <NavBarComponent/>
									<div>
							      <Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
							      <Route path="/boutique" component={ItemComponent} exact={false} strict={false}/>
							    </div>
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
							</div>
						</BrowserRouter>
			        </body>
    );
  }
}

export default App;
