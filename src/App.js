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
      searchField: '',
    };
  }
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(({ data }) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search monsters'
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <div className='card-list'>
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
