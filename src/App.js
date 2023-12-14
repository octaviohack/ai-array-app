import React, { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import ListPlayers from './ListPlayers';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, { ...player, id: players.length + 1 }]);
  };

  return (
    <section className='w-1140px'>
      <h1>Top Soccer Players By Octavio 25459</h1>
      <h2>Ranking 2023</h2>
      <div className='data-table'>
        <NewPlayerForm addPlayer={addPlayer} />
        <ListPlayers players={players} />

      </div>
    </section>
  ); 
}   

export default App;
