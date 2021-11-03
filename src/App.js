import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import Test from './components/Test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.setState({ monsters: res.data }));
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((user) => (
          <h2 key={user.id}> {user.name} </h2>
        ))}
      </div>
    );
  }
}

export default App;
