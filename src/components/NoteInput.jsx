
import React, { useState } from 'react'



function NoteInput({addNotes, setAddNotes}) {
// passed Test 2---------------------------------------------------
const [note, setNote]= useState('');
const NoteChange = (event) => {setNote(event.target.value)};

// passed Test 3----------------------------------------------------
// we moved const [addNotes, setAddNotes] = useState([]); to the NoteManager component.
//  because it is shared state and multiple child components need access to it the parent state and all other components need to use it.so the state is stored in the parent component(NoteManager), and use by children components as props.

// -change index to id:
// when the user click "Add" the note will add with specific id instead index.
// crypto.randomUUID(), is a global method to generate unique id for arrays items instead of index without install any packages to use.

const AddText = () =>{
  
  const noteId ={
  id: crypto.randomUUID(),
  text: note,
} 
console.log('noteId: Returns the object:{ id, text } before it is added to state.');
console.log(noteId);
console.log('-------------------------');


  setAddNotes([...addNotes, noteId])

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