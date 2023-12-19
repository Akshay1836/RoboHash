import React, { Component } from 'react'
import './CardItem.css'

export default class CardItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
       <div className='carditem'>
        <h3>{this.props.title}</h3>
        <img src={`https://robohash.org/${this.props.order}?set=set3`} alt="image"/>
      </div>
     
    )
 
     
  }
}


