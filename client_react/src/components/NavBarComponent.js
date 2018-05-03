import React, { Component } from 'react';

import { Navbar, Nav, NavItem,FormGroup,FormControl, Button } from 'react-bootstrap';

import Login from './Login';


class NavBarComponent extends Component {

        constructor(props) {
        	super(props);
        	this.state ={
                      googleUserInfo: JSON.parse(localStorage.getItem('USER_INFO')),
                      access_token: null,
		                  tasks_pending: [],
                      tasks_ongoing: [],
                      tasks_completed:[]
        	};
        }

        updateLoginInfo(user, token){
            localStorage.setItem("ACCESS_TOKEN_KEY", token);
            localStorage.setItem("USER_INFO", JSON.stringify(user));
            this.setState({googleUserInfo: user, access_token: token});
        }

        logout(e){
            localStorage.removeItem("ACCESS_TOKEN_KEY");
            localStorage.removeItem("USER_INFO");
            this.setState({googleUserInfo: null, access_token: null});
        }

        isLogin(){
            return localStorage.getItem("ACCESS_TOKEN_KEY")!==null;
        }


    render() {
      const main_content= !this.isLogin() ? <Login updateInfo={this.updateLoginInfo.bind(this)}/>:
        <div>
          <div className="userinfo">
            <a href="#" onClick={this.logout.bind(this)} >déconnection</a>
          </div>
        </div>
        return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#Home">Pokebuy</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem eventKey={1} href='#'>
                        Shop
                    </NavItem>
                    <NavItem eventKey={1} href='#'>
                        Profile
                    </NavItem>
                    <NavItem eventKey={1} href='#'>
                        Caddie
                    </NavItem>
                    <NavItem eventKey={1} href='#'>
                      {main_content}
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBarComponent;
