// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoteInput from './components/NoteInput';

function App() {

 return (

   <Router>
    <div>

       <NavBar />
       <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/NoteInput" element={<NoteInput />} />


      </Routes>
    </div>
   </Router>

 );

}


export default App
