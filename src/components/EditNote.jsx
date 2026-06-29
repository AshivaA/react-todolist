import React, { useState } from 'react'

// we need to pass addNotes and setAddNotes as props to CHILD components because they needs to get them as information.
function EditNote({ addNotes, setAddNotes }) {


// passed Test 4-----------------------------------------------------
// this state store the input value in edit input that created by JSX (similar to html in react).
const [EditInputBox, setEditInputBox] = useState('');
const CreateEditInputBox = (event) => {setEditInputBox(event.target.value)};

// this state select the exact note in array for editing.
// useState (null), set it as null because user has not press edit button yet to chose a note when the app start.
const [editNotesId, setEditNotesId] = useState (null);

// .find() returns whatever finds in the array after change index to id in new array.
// so const [addNotes, setAddNotes] = useState([]); will change to  useState([{ id: "", text: "" }]); after changing index to id using
// AddText ->  const noteId ={id: crypto.randomUUID(),text: note,}. 
// so addNote return something like that now: addNotes = [ { id: "123", text: "AAAA" },];

const EditText = (selectedNoteId) => {
  console.log('-select the note id for editing.');
  console.log(selectedNoteId);
  console.log('-------------------------');


  const findNoteById = addNotes.find((note) =>
    note.id === selectedNoteId
  );
  console.log('-find note by id for editing using .find()');
  console.log(findNoteById);
  console.log('-------------------------');
  
 setEditInputBox(findNoteById.text);
//  saved the ID in state
 setEditNotesId(selectedNoteId);

};



// function to save edited note in new array with the same id and update this object, const noteId ={id: crypto.randomUUID(), text: note}
const SaveEditedNote = () =>{
// .map() creates a new array When it finds the note id that matching whit editNotesId to save edited note.
 const updateNotes = addNotes.map((note) => 
   note.id === editNotesId ? {id:note.id , text: EditInputBox} : note

 )
   console.log('-Create a new array and update only the note with the same id using .map()');
   console.log(updateNotes);
   console.log('-------------------------');
  

  setAddNotes(updateNotes);
// we  set it to null to stop editing after saving. 
  setEditNotesId(null);
  setEditInputBox('');
}


// passed Test 5--------------------------------------------
const [deleteNote, setDeleteNote]= useState([]);
const DeleteText= (selectedNoteId) => { 

const deletedNote = addNotes.find((note) =>
  note.id === selectedNoteId

)

  // save deleted notes inside deleteNote state based on selected note id.
  setDeleteNote([ ...deleteNote, deletedNote ]);

  //remove selected note from addNotes.
  // (filter() create a new array that keeps every notes except the deleted one.)
  const updateAddText = addNotes.filter((note) => note.id !== selectedNoteId);
  // update addNotes state
  setAddNotes(updateAddText);

}






  return (
    <div  className='div-content'>

<ul className='ul-box'>
{addNotes.map((addNote)=>(

// <li> {if condition is true? then show first result : else show second result} </li>
 <li key={addNote.id} className='li-box'>
  
  <div   className='li-input'>   
  { editNotesId === addNote.id ? (<textarea className='edit-input' value={EditInputBox} onChange={CreateEditInputBox} />) :( addNote.text)}
  </div>
  


 { editNotesId === addNote.id ? ( <button  className='save-btn' onClick={SaveEditedNote}>Save</button>) 
 :( <button  className='edit-btn'  onClick={()=> EditText(addNote.id)}>Edit</button>)}




 <button  className='delete-btn'  onClick={()=> DeleteText(addNote.id)}>Delete</button>

 </li>
))}
</ul>







    </div>
  )
}

export default EditNote