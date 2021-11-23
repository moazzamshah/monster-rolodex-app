import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/card-list/CardList.component';
import './components/card/card.style.css';
import SearchBox from './components/searchBox/SearchBox.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);

  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(({ data }) => setMonsters(data));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1> Monster Rolodex </h1>
      <SearchBox
        handleChange={(e) => setSearchField(e.target.value)}
        placeholder='Search monsters'
      />
      <div className='card-list'>
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

export default App;
