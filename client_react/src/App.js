import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import ShopComponent from './components/ShopComponent';
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
					<Route path="/" component={DashboardComponent} exact={true} strict={true}/>
					<Route path="/profile" component={ItemformComponent} exact={true} strict={true}/>
					<Route path="/boutique" component={ShopComponent} exact={false} strict={true}/>
				</div>
			</BrowserRouter>
			<FooterComponent/>
			</div>
        );
    }
}

export default App;
