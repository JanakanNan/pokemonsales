import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import CarouselComponent from './components/CarouselComponent';
import ItemComponent from "./components/ItemComponent";
import ItemformComponent from './components/ItemformComponent';
import HotSalesComponent from './components/HotSalesComponent';
import Login from './components/Login';


class App extends Component {

	render() {
		return (
		<BrowserRouter>
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
<<<<<<< a8d14a8fd3a156d20f84366480bf13c38a8dfbbd
						</Grid>
					</div>
				</BrowserRouter>
				</div>
			</div>
        </body>
=======
							</div>
						</div>
			        </body>
		</BrowserRouter>
>>>>>>> Mise en place du route profile et boutique
    );
  }
}

export default App;
