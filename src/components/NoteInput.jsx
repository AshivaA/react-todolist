// import React from 'react'
import React, { useState } from 'react'

function NoteInput() {

const [note, setNote]= useState('');

const NoteChange = (event) => setNote(event.target.value);


  return (
    <div>
        
<input 
 value={note}
  onChange={NoteChange}
  placeholder=' write your note here... '
/>


    </div>
  )
}

export default NoteInput