import React, { useState } from "react";

export default function Album({ album, deleteAlbum, updateAlbum }) {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(album.title);

  const handleUpdate = () => {
    const updatedAlbum = {
      id: album.id,
      title: updatedTitle,
      coverImage: album.body,
    };

    updateAlbum(updatedAlbum);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteAlbum(album.id);
  };

  return (
    <div className="album">
      {editing ? (
        <div>
          <input
            type="text"
            // value={updatedTitle}
            placeholder="What's the update?"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div >
          <h3>{album.title}</h3>
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
