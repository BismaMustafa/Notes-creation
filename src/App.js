import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import Register from './components/register';
import Navbar from './components/Navbar';
import Login from './components/login';
// import Notes from './components/notes';
import NoteForm from './components/noteform';
import NotesList from './components/noteslist';
import NoteItem from './components/noteItem';
import MainLayout from './components/mainlayout';
import PrivateRoute from './components/privateRoute';
// import App from './components/index';

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/login" element={<Login />} />
    <Route path="/notes" element={<useNotes />} />
    <Route path="/index" element={< App/>} />
    <Route path="/noteform" element={< NoteForm/>} />
    <Route path="/notelist" element={< NotesList/>} />
    <Route path="/noteitem" element={< NoteItem/>} />
    <Route path="/mainlayout" element={< MainLayout/>} />
    <Route path="/privatelayout" element={< PrivateRoute/>} />
      
      <Route path="/register" element={<Register />} />
        
      </Routes>  
    </Router>
    // </BrowserRouter>
  );
}

export default App;
