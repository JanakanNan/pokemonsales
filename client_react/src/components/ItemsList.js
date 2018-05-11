import React, { Component } from 'react';
import ItemComponent from './ItemComponent';

class ItemsList extends Component{
  constructor(){
    super();
    this.state={
      search: ''
    };
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


  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  render() {

		return (
      <div>
          <ul>
            {this.props.itemComponents.map((dynamicData,key)=>{
              return <div key={key}>
                key={dynamicData.name}
              </div>
            })}
          </ul>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
        </div>
    )
  }
}

export default ItemsList;
