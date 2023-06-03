import React, { useState } from "react";
import './albumform.css';

export default function AlbumForm({ addAlbum }) {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlbum = {
      title,
      userId,
      body
    };

    //passing new album to the parent component
    addAlbum(newAlbum);

    setTitle('');
    setUserId('');
    setBody('');
  };

  return (
    <div className="album-form-container">
      <h4>Create Album</h4>
      <form className="album-form" onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Album</button>
      </form>
    </div>
  )
}
