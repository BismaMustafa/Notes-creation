import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from '../components/noteItem';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [token] = useState(localStorage.getItem('token')); // Assuming JWT token is stored in localStorage

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/notes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, [token]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl text-center mb-4">All Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <NoteItem key={note.noteId} note={note} token={token} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
