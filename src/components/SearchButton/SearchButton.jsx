import React, { Component } from "react";
import CardItem from "../CardItem/CardItem";
import './SearchButton.css'



export default class SearchButton extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      data: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => this.setState({ people: result }));
  }
makeChange=(event)=>{
        const SearchData=event.target.value.toLocaleLowerCase();
        this.setState(()=>{
                return({data:SearchData})
        })
        
}
  render() {
    const filterData = this.state.people.filter((people) => {
      return people.name.toLocaleLowerCase().includes(this.state.data);
    });
    return (
      <div className="main">
        <input type="search" placeholder="search" onChange={this.makeChange} />
        <div className="cards">

        {
        filterData.map((people) => {
          return <CardItem title={people.name} order={people.id} key={people.id}/>
        })
        }
        </div>
      
        
      </div>
    );
  }
}
