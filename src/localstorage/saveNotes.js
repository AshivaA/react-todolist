
    // we need to set localstorage.setItem and localstorage.getItem in separate function, because they have different responsibilities. so we should import them to use in related components.

    //saveNotes() Runs every time addNotes changes.should import in localstorageManager.jsx.
    //loadNotes() Runs once when the app starts.should import in NoteManager.jsx.

    // 1-save notes (localstorage can only save data in string.)
    // JSON.stringify() convert array into a string before saving 
    // like that -> ['textA', 'textB']   ->   '['textA', 'textB']'



      function saveNotes(addNotes){
      localStorage.setItem('saveText' , JSON.stringify(addNotes));
  }


export default saveNotes