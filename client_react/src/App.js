import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import CarouselComponent from './components/CarouselComponent';
import ItemComponent from "./components/ItemComponent";
import ItemformComponent from './components/ItemformComponent';
import HotSalesComponent from './components/HotSalesComponent';


class App extends Component {

	render() {
		return (

			<BrowserRouter>
				<div className="App">
						<NavBarComponent/>
						<div>
							<Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
						</div>
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
					</div>
				</BrowserRouter>
				</div>
			</div>
        </body>
    );
  }
}

export default App;
