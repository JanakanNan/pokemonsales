import React, { Component } from 'react';

import { Navbar, Nav, NavItem,FormGroup,FormControl, Button, Glyphicon } from 'react-bootstrap';

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
            <div className="navbar fluid">
                <div className="red-bar">
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                    <button className="cart">
                        <Glyphicon glyph={"shopping-cart"}/>
                    </button>
                </div>
                <div className="black-bar">
                    <ul className={"nav nav-left"}>
                        <li className="nav-item">
                            <a eventKey={1} href='/' >Home</a>
                            <span>//</span>
                        </li>
                        <li className="nav-item">
                            <a eventKey={1} href='#' >Pokémons</a>
                            <span>//</span>
                        </li>
                        <li className="nav-item">
                            <a eventKey={1} href='/boutique' >Boutique</a>
                            <span>//</span>
                        </li>
                        <li className="nav-item">
                            <a eventKey={1} href='#' >Voyage</a>
                            <span>//</span>
                        </li>
                        <li className="nav-item">
                            <a eventKey={1} href='#' >Autre</a>
                        </li>
                    </ul>
                    <div className="logo-container">
                        <img className={"logo"} src="/img/pokesales.png" alt=""/>
                    </div>
                    <ul className={"nav nav-right"}>
                        <li>
                            <a eventKey={1} href='/profile' >Profile</a>
                        </li>
                        <li>
                            <span>//</span>{main_content}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBarComponent;
