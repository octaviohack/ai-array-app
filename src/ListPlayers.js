// src/ListPlayers.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayPlayer from './DisplayPlayer';
import {  players as initialPlayer } from './players'; // import the initial player object

function ListPlayers() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [players, setPlayers] = useState(initialPlayer); // set the initial player object
  const [showPlayerDetails, setShowPlayerDetails] = useState(false);

  const handlePlayerSelect = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowPlayerDetails(true);
  };

  const handleDeleteClick = (playerId) => {
    // Delete the player from the array
    const updatedPlayers = players.filter(player => player.id !== playerId);
    setPlayers (updatedPlayers);
    

  };
  const handleBackToList = () => {
    setShowPlayerDetails(false);
};

  // If a player is selected, render the DisplayPlayer component
  if (selectedPlayerId !== null) {
    return <DisplayPlayer playerId={selectedPlayerId} />;
  }

  // Otherwise, render the list of players
  return (
    <section className="w-1140px">
            {!showPlayerDetails ? (
                <>

                <table className="data-table">        
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Club</th>
                            <th>Nationality</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>  
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.firstname} {player.lastname} ({player.age})</td>
            <td>{player.trophies}</td>
            <td>{player.club}</td>
            <td>{player.nationality}</td>
            <td><button onClick={() => handlePlayerSelect(player.id)}>More...</button> </td>
            <td> <button className="delete" onClick={() => handleDeleteClick(player.id) }>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    ) : (
        <DisplayPlayer playerId={selectedPlayerId} />
    )}
    </section>
  );
}

export default ListPlayers;
