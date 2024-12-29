import React, { useState } from 'react';
import axios from 'axios';

const NoteItem = ({ note, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [subject, setSubject] = useState(note.subject);

  const handleUpdate = async () => {
    try {
      const updatedNote = { title, content, subject };
      await axios.put(`http://localhost:4000/api/notes/${note.noteId}`, updatedNote, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Note updated successfully');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating note:', error);
      alert('Error updating note');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${note.noteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Note deleted successfully');
      // Optionally, you can refresh the notes list here or pass a callback to remove this note from the parent state
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Error deleting note');
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block mb-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block mb-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block mb-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <button
            onClick={handleUpdate}
            className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <p className="text-sm text-gray-600">{note.subject}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="py-2 px-4 bg-blue-500 text-white rounded-md mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
