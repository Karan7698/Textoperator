import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'



function App() {
  const [darkMode,setDarkMode]= useState('light');
  return (
    <>
    
<Navbar title="TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter the text"/>  

<About/>
</div>
    </>

  );
}

export default App;
