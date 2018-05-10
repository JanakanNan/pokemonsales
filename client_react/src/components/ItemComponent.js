import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { getItems } from '../services/ItemService';


class ItemComponent extends Component {

  constructor()
  {
    super();
    this.state = {
      data: [],
    }
  }



  componentDidMount(){
    getItems().
    then((findreponse)=>
    {
      console.log(findreponse)
      this.setState({
        data:findreponse,
      })
    })
  }

    render() {
        return (
          <Row>
            <Col md={12}>{
              this.state.data.map((dynamicData,key)=>
              <div className={"fluid"}>
                <Col md={2}>
                  <Panel>
                      <div className="item-name">
                          <div key={key}>
                              <h3>
                                {dynamicData.name}
                              </h3>
                              <p>{dynamicData.information}</p>
                              <div className="item-price">
                                  <h4>{dynamicData.prix} €</h4>
                              </div>
                              <Panel.Body>
                                  <img src="/img/pokeball.jpg" alt="Item"/>
                              </Panel.Body>
                          </div>
                    </div>
                  </Panel>
                  </Col>
                </div>
              )
            }
            </Col>
          </Row>
        );
    }
}

export default ItemComponent;
