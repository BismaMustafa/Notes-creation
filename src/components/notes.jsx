// // src/context/NoteContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const NoteContext = createContext();

// export const NoteProvider = ({ children }) => {
//   const [notes, setNotes] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchNotes = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:4000/api/notes');
//       setNotes(response.data);
//     } catch (err) {
//       setError('Failed to fetch notes');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createNote = async (noteData, token) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:4000/api/notes', noteData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNotes([...notes, response.data]);
//     } catch (err) {
//       setError('Failed to create note');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateNote = async (noteId, updatedNote, token) => {
//     setLoading(true);
//     try {
//       const response = await axios.put(`http://localhost:4000/api/notes/${noteId}`, updatedNote, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNotes(notes.map(note => (note.noteId === noteId ? response.data : note)));
//     } catch (err) {
//       setError('Failed to update note');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteNote = async (noteId, token) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:4000/api/notes/${noteId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNotes(notes.filter(note => note.noteId !== noteId));
//     } catch (err) {
//       setError('Failed to delete note');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <NoteContext.Provider value={{ notes, createNote, updateNote, deleteNote, error, loading }}>
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export const useNotes = () => useContext(NoteContext);
