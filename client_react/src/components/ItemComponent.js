import React, { Component } from 'react';

import { Grid, Row, Col, Panel } from 'react-bootstrap';


class ItemComponent extends Component {



    render() {
        return (
            <div className={"fluid"}>
                <Panel>
                    <div className="item-name">
                        <h3>Pokeball</h3>
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
        );
    }
}

export default ItemComponent;