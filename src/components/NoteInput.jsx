
import React, { useState } from 'react'



function NoteInput({addNotes, setAddNotes}) {
// passed Test 2---------------------------------------------------
const [note, setNote]= useState('');
const NoteChange = (event) => {setNote(event.target.value)};

// passed Test 3----------------------------------------------------
// const [addNotes, setAddNotes] = useState([]);
const AddText = () =>{setAddNotes([...addNotes, note])
  console.log(note);
  
  setNote('')};



  return (
    <div>
  
<input 
 value={note}
  onChange={NoteChange}
  placeholder=' write your note here... '
/>

<button onClick={AddText}>Add</button>


    </div>
  )
}

export default NoteInput