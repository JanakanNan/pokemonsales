import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import ItemComponent from './ItemComponent';



class ShopComponent extends Component {

    render() {
        return (

                <div className={"dash-Item shop-item"}>
                    <ItemComponent/>
                </div>
        );
    }
}

export default ShopComponent;