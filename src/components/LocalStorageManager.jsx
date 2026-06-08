
import React, { useEffect } from 'react';
import saveNotes from '../localstorage/saveNotes'


// Why return null? Every React component must return something. otherwise  the component returns undefined.React expects a React element or null.

function LocalStorageManager({addNotes}) {
  

   useEffect (() =>{
    saveNotes (addNotes)
   }, [addNotes]);

  return null;
    
  
}

export default LocalStorageManager


