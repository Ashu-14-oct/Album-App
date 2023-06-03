import React, { useState, useEffect } from "react";
import AlbumForm from "./AlbumForm";
import Album from "./Album";
import "./albumlist.css";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbums(data);
    } catch(err){
      console.log('Error fetching albums:', err);
    }
  }

  const addAlbum = async (newAlbum) => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAlbum),
      });
      const data = await response.json();
      setAlbums([...albums, data]);
    }catch(error){
      console.error('Error adding album:', error);
    }
  };

  const updateAlbum = async (updatedAlbum) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/`, updatedAlbum);
      console.log(updatedAlbum.id);
      setAlbums(albums.map((album) => (album.id === updatedAlbum.id ? updatedAlbum : album)));
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  const deleteAlbum = async (albumId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: 'DELETE',
      });
      setAlbums(albums.filter((album) => album.id !== albumId));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <div className="album-list-container">
      <h4 className="album-list-title">Albums</h4>
      <div  className="album-list">
        {albums.map((album) => (
          <Album key={album.id} album={album} deleteAlbum={deleteAlbum} updateAlbum={updateAlbum}/>
        ))}
      </div>

      <AlbumForm addAlbum={addAlbum} />
    </div>
  );
}
