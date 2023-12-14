import React, { useState } from 'react';

function NewPlayerForm({ addPlayer }) {
  const [newPlayer, setNewPlayer] = useState({
    id: '',
    firstname: '',
    lastname: '',
    age: '',
    club: '',
    trophies: '',
    nationality: '',
    bio: '',
    img: ''
  });

  const handleChange = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(newPlayer);
    // Reset the form
    setNewPlayer({
      id: '',
      firstname: '',
      lastname: '',
      age: '',
      club: '',
      trophies: '',
      nationality: '',
      bio: '',
      img: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" value={newPlayer.id} onChange={handleChange} placeholder="ID" />
      <input type="text" name="firstname" value={newPlayer.firstname} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="lastname" value={newPlayer.lastname} onChange={handleChange} placeholder="Last Name" />
      <input type="text" name="age" value={newPlayer.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="club" value={newPlayer.club} onChange={handleChange} placeholder="Club" />
      <input type="text" name="trophies" value={newPlayer.trophies} onChange={handleChange} placeholder="Trophies" />
      <input type="text" name="nationality" value={newPlayer.nationality} onChange={handleChange} placeholder="Nationality" />
      <input type="text" name="bio" value={newPlayer.bio} onChange={handleChange} placeholder="Bio" />  
      <input type="text" name="img" value={newPlayer.img} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default NewPlayerForm;
