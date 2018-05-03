import React, { Component } from 'react';
import './App.css';

import { Grid } from 'react-bootstrap';


import NavBarComponent from './components/NavBarComponent';
import DashbordComponent from './components/DashboardComponent';

class App extends Component {
	
	render() {
		return (
		<body>
            <NavBarComponent/>
            <DashbordComponent/>

        </body>
    );
  }
}

export default App;