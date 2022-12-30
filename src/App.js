import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []) //getters, setters
  const [activenote, setActivenote]= useState(false)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  //create note
  const onAddNote = () => {
    const newNote = {
      // console.log('newNote');
      id: uuid(),
      title: 'untitled',
      body: ' ',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  //delete note
  // const onDeleteNote = (noteId) => {
  //   setNotes(notes.filter(({ id }) => id !== noteId));
  // };

  const onUpdateNote =(updatedNotes) =>{
    const updateNotesArray= notes.map((note) => {
      if (note.id=== activenote){
        return updatedNotes;
      }
      return note
    });
    setNotes(updateNotesArray);
  }

  const onDeleteNote = (idtodelete) => {
    setNotes(notes.filter((note) => note.id !== idtodelete));
  };

  const getActivenote=()=>{
    return notes.find((note)=>note.id === activenote);
  };
  
  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activenote={activenote} setActivenote={setActivenote} />
      <Main activenote={getActivenote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
