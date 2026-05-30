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
// make a state to create input for edit button.
const [EditInputBox, setEditInputBox] = useState('');
const CreateEditInputBox = (event) => {setEditInputBox(event.target.value)};

// make a state to select the exact note in array for editing.
// useState (null), set it as null because user has not press edit button yet to chose a note based on index.
const [editNotesIndex, setEditNotesIndex] = useState (null);
const EditText = (index) => {
 setEditInputBox(addNotes[index]);
 setEditNotesIndex(index);

};

// function to save edited note
const SaveEditedNote = () =>{
  const updateNotes =[...addNotes];
  console.log(updateNotes);
  
  updateNotes[editNotesIndex] = EditInputBox;
  console.log(updateNotes);
  
  setAddNotes(updateNotes);
  setEditNotesIndex(null);
 
  setEditInputBox('');
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

// <li> {if condition? then true result : else false result} </li>
 <li key={index} className='note-box'>
  { editNotesIndex ===index ?(<input value={EditInputBox} onChange={CreateEditInputBox} />) :( addNote)}


 <button onClick={()=> EditText(index)}>Edit</button>
 <button onClick={SaveEditedNote}>Save</button>

 </li>
))}
</ul>








    </div>
  )
}

export default NoteInput