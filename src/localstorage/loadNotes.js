  
// If the user opens the app for the first time, localStorage.getItem() returns null because there is no saved data yet.
// If addNotes becomes null, addNotes.map(...) will crash. Because .map() only works on arrays.

// To prevent this, we return an empty array ([]), which matches with the const [addNotes, setAddNotes] = useState([]);
// So:
// - If saved notes exist, return the saved notes.
// - else, return an empty array.
  
  
 // 2-load once notes when app start
 // JSON.parse() convert the string array to normal array for loading notes 
 // like that -> '['textA', 'textB']'  ->  ['textA', 'textB']

    function loadNotes() {
     const loadText = localStorage.getItem('saveText');
   
     return loadText? JSON.parse(loadText) : [];
   }

   export default loadNotes


