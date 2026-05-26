// import React from 'react'
import React, { useState } from 'react'


function NoteInput() {

const [note, setNote]= useState('');
const NoteChange = (event) => {setNote(event.target.value)};

const [addNotes, setAddNotes] = useState([]);
const AddText = () =>{setAddNotes([...addNotes, note])
  setNote('');
};


  return (
    <div>
        
<input 
 value={note}
  onChange={NoteChange}
  placeholder=' write your note here... '
/>

<button onClick={AddText}>Add</button>
<ul>
{addNotes.map((addNote, index)=>(
 <li key={index} className='note-box'>{addNote}</li>
))}
</ul>








    </div>
  )
}

export default NoteInput