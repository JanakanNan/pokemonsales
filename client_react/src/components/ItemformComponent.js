import React, { Component } from 'react';
import {createItem} from '../services/ItemService';

class ItemformComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valueName: '',
                  valuePrix: '',
                  valuePhoto: '',
                  valueQuantite: '',
                  valueInformation: ''};
  }

  handleChangeName(event) {
    this.setState({valueName: event.target.value});
  }

  handleChangePrix(event) {
    this.setState({valuePrix: event.target.value});
  }

  handleChangePhoto(event) {
    this.setState({valuePhoto: event.target.value});
  }

  handleChangeQuantite(event) {
    this.setState({valueQuantite: event.target.value});
  }

  handleChangeInformation(event) {
    this.setState({valueInformation: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.valueName);
    createItem({name: this.state.valueName,
                prix: this.state.valuePrix,
                photo: this.state.valuePhoto,
                quantite: this.state.valueQuantite,
                information: this.state.valueInformation})
      .then(data=>{
        console.log(data);
      });
      event.preventDefault();
  }
  
  render() {
    return (
        <div className="item-form">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <tr>
                    <th>
                        <label>
                            Name:
                        </label>
                    </th>
                    <td>
                        <input type="text" value={this.state.valueName} onChange={this.handleChangeName.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>
                            Prix:
                        </label>
                    </th>
                    <td>
                        <input type="text" value={this.state.valuePrix} onChange={this.handleChangePrix.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>
                            Photo:
                        </label>
                    </th>
                    <td>
                        <input type="file" value={this.state.valuePhoto} onChange={this.handleChangePhoto.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>
                            Quantite:
                        </label>
                    </th>
                    <td>
                        <input type="text" value={this.state.valueQuantite} onChange={this.handleChangeQuantite.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>
                            Information:
                        </label>
                    </th>
                    <td>
                        <input type="text" value={this.state.valueInformation} onChange={this.handleChangeInformation.bind(this)} />
                    </td>
                </tr>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default ItemformComponent;
