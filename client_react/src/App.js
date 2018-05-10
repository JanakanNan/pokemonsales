import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import ItemComponent from "./components/ItemComponent";
import ItemformComponent from './components/ItemformComponent';
import DashboardComponent from "./components/DashBoardComponent";
import FooterComponent from "./components/FooterComponent";

class App extends Component {

    render() {
        return (
			<div className={"body"}>
			<NavBarComponent/>
			<BrowserRouter>
				<div>
					<Route path="/home" component={DashboardComponent} exact={false} strict={false}/>
					<Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
					<Route path="/boutique" component={ItemComponent} exact={false} strict={false}/>
				</div>
			</BrowserRouter>
			<FooterComponent/>
			</div>
        );
    }
}

export default App;
