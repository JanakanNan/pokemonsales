import React, { Component } from 'react';

import { Navbar, Nav, NavItem,FormGroup,FormControl, Button, Glyphicon } from 'react-bootstrap';
import { getItem, getItems } from '../services/ItemService';

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

        handleSearchValue(event) {
          this.setState({searchValue: event.target.value});
        }

        handleSubmits(event) {
            getItems().
            then((findreponseAllItems)=>
            {
              console.log(findreponseAllItems[0]._id);
              if(findreponseAllItems[0].name === this.state.searchValue){
                getItem(findreponseAllItems[0]._id).
                then((findreponseItem)=>
              {
                console.log(findreponseItem);
                this.setState({
                  data: findreponseItem,
                })
              });
            } else {
              console.log("erreur");
            }
          });
          event.preventDefault();
        }


    render() {
      const main_content= !this.isLogin() ? <Login updateInfo={this.updateLoginInfo.bind(this)}/>:
        <div>
          <ul className={"nav nav-right"}>
              <li><a href="/" onClick={this.logout.bind(this)} >Déconnection</a></li>
              <li>
                  //{main_content}
              </li>
              <li><a href="/newitem">Nouveau produit</a></li>
          </ul>
        </div>
        return (
            <div>
            <div className="navbar fluid">
                <div className="red-bar">
                    <Navbar.Form pullLeft>
                        <form onSubmit={this.handleSubmits.bind(this)}>
                            <input type="text" value={this.state.searchValue} onChange={this.handleSearchValue.bind(this)} placeholder="Search" />
                            <input type="submit" value="Submit" />
                        </form>{' '}
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
                            {main_content}
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        );
    }
}

export default NavBarComponent;
