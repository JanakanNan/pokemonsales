import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import DashbordComponent from './components/DashboardComponent';
import ItemformComponent from './components/ItemformComponent';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
						<NavBarComponent/>
						<div>
							<Route path="/" component={DashbordComponent} exact={true} strict={true}/>
							<Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
						</div>

        </div>
				</BrowserRouter>
    );
  }
}

export default App;
