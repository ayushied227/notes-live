import React from 'react'

function Sidebar ( {notes, onAddNote, onDeleteNote, activenote, setActivenote} ){
  const sortedNotes=notes.sort((a,b)=> b.lastModified - a.lastModified)
 
  return (
      <div className='sidebar'>
        <div className="sidebar-header">
      <h2>Notes</h2>
        <button onClick={()=>onAddNote()}>Add</button>
        </div>


            <div className="sidebar-noteslist">

                {sortedNotes.map((note, id) =>(
                    <div className={`sidebar-note ${note.id === activenote && "active"}`} 
                    key={id} onClick={()=>setActivenote(note.id)} >
                      {/* //this kept me stuck for hrs {notes.map((note) => { })} */}

                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <div className="body">

                      <p>{note.body && note.body.substr(0, 50)+ '...'}</p>
                      <small className='note-meta'>Last Modified {new Date (note.lastModified).toLocaleDateString('en-GB', {
                        hour: "2-digit",
                        minute: "2-digit",
                      })} </small>
                    </div>
                </div>
                ))}

            </div>

    </div>
  )
}

export default Sidebar
