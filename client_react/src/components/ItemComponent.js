import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';


class ItemComponent extends Component {

  constructor()
  {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMont(){

    fetch('https://facebook.github.io/react-native/movies.json').
    then((Response)=>Response.json()).
    then((findreponse)=>
    {
      console.log(findreponse.movies)
      this.setState({
        data:findreponse.movies,
      })
    })
  }

    render() {
        return (
          <div>
              {
                this.state.data.map((dynamicData,key)=>
                <div>
                  {dynamicData.title}
                </div>
                )
              }
            <div className={"fluid"}>
                <Panel>
                    <div className="item-name">
                        <h3>{
                          this.state.data.map((dynamicData,key)=>
                          <div>
                            {dynamicData.title}
                          </div>
                          )
                        }</h3>
                        <p>blablabla</p>
                    </div>
                    <div className="item-price">
                        <h4>3P</h4>
                    </div>
                    <Panel.Body>
                        <img src="/img/pokeball.jpg" alt="Item"/>
                    </Panel.Body>
                </Panel>
            </div>
        </div>

        );
    }
}

export default ItemComponent;
