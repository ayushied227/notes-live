import React from 'react'

function Main({activenote, onUpdateNote}) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activenote,
      [key]:value,
      lastModified:Date.now(),

    })
  }; 
  if (!activenote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className='main'>
      {/* <h3>Main</h3> */}
        <div className="main-note-edit">
            <input type='text' id='title'
            placeholder="Note Title"  autoFocus 
            value={activenote.title}
            onChange={(e) => onEditField("title", e.target.value)}/>
            <hr />
            <textarea id="body" placeholder='Write your notes here...' 
            value={activenote.body}
            onChange={(e) => onEditField("body", e.target.value)} >
            </textarea>
        </div>

        <div className="main-note-preview">

            <h1 className='preview-title'>{activenote.title}</h1>
            <div className="markdown-preview">{activenote.body}
            </div>
        </div>
    </div>
  )
}

export default Main
