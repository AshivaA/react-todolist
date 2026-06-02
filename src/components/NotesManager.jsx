
import React, { useState } from 'react';
import NoteInput from './NoteInput';
import EditNote from './EditNote';


function NotesManager() {

// this is the shared state that used by multiple components.( we should to keep shared state in the PARENT component we passed into App.jsx and passe it as props to other components.)
const [addNotes, setAddNotes] = useState([]);


  return (
    <div>
{/* we need to pass addNotes and setAddNotes as props to CHILD components because all components needs to  get them as information. */}
<NoteInput 
addNotes={addNotes}
setAddNotes= {setAddNotes}
/>

<EditNote
addNotes={addNotes}
setAddNotes= {setAddNotes}
/>

    </div>
  )
}

export default NotesManager