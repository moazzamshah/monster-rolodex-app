import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/card-list/CardList.component';
import './components/card/card.style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(({ data }) => this.setState({ monsters: data }));
  }

  render() {
    return (
      <div className='App'>
        <div className='card-list'>
          <CardList monsters={this.state.monsters} />
        </div>
      </div>
    );
  }
}

export default App;
