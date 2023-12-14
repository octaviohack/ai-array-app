// src/DisplayPlayer.js

import React from 'react';
import { players } from './players';

function DisplayPlayer({ playerId }) {
  // Find the player with the given ID
  const player = players.find(p => p.id === playerId);

  // If the player is not found, return a message or null
  if (!player) {
    return <p>Player not found.</p>;
  }
  
  function DisplayPlayer({ player }) {
    // Asegúrate de que player y player.img existen
    if (!player || !player.img) {
      return <p>Player not found.</p>;
    }
  
    const containerStyle = {
      backgroundImage: `url(${player.img})`, // Usa la imagen del jugador como fondo
      backgroundSize: 'contain',
      width: '100%',
      height: '800px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      
      
      
      // Añade aquí más estilos si es necesario
    };
  
    return (
      <div style={containerStyle}>
 
 
      </div>
    );
  }
  

  // Displaying the full details of the player
  return (
    <div>
      <h2>{player.firstname} {player.lastname}</h2>
      <p><strong>Age:</strong> {player.age}</p>
      <p><strong>Club:</strong> {player.club}</p>
      <p><strong>Nationality:</strong> {player.nationality}</p>
      <p><strong>Trophies:</strong> {player.trophies}</p>
      <p><strong>Bio:</strong> {player.bio}</p>
      <DisplayPlayer player={player} />
      <button onClick={() => window.location.reload(false)}>Back</button>
    </div>
  );
}

export default DisplayPlayer;
