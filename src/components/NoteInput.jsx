// import React from 'react'
import { input } from '@testing-library/user-event/dist/cjs/event/input.js';
import React, { useState } from 'react'


function NoteInput() {
// passed Test 2---------------------------------------------------
const [note, setNote]= useState('');
const NoteChange = (event) => {setNote(event.target.value)};

// passed Test 3----------------------------------------------------
const [addNotes, setAddNotes] = useState([]);
const AddText = () =>{setAddNotes([...addNotes, note])
  console.log(note);
  
  setNote('')};

// passed Test 4-----------------------------------------------------
// useState (null), set it as null because user has not press edit button yet and after pressing, it can collect notes based on index.
const [editNotesIndex, setEditNotesIndex] = useState (null);
const EditText = (index) => {
 setNote(addNotes[index]);
 setEditNotesIndex(index);

};

// function to save edited note
const SaveEditedNote = () =>{
  const updateNotes =[...addNotes];
  console.log(updateNotes);
  
  updateNotes[editNotesIndex] = note;
  console.log(updateNotes);
  
  setAddNotes(updateNotes);
  setNote('');
}





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
 <li key={index} className='note-box'>{addNote}

 <button onClick={()=> EditText(index)}>Edit</button>
 <button onClick={SaveEditedNote}>Save</button>

 </li>
))}
</ul>








    </div>
  )
}

export default NoteInput