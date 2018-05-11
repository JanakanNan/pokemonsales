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
              <div className={"fluid"} key={key}>
                <Col xs={12} md={2}>
                  <Panel>
                      <div className="item-name">
                          <h3>
                            {dynamicData.name}
                          </h3>
                          <p>{dynamicData.information}</p>
                      </div>
                      <div className="item-price">
                          <h4>{dynamicData.prix} €</h4>
                      </div>
                      <Panel.Body>
                          <img src={dynamicData.photo} alt="Item"/>
                      </Panel.Body>
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
