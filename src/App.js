import React from 'react';
import './App.css';
import City from './City/City.js';
import Menu from './Menu/Menu.js'
import Cards from './Cards/Cards.js'
import Gif from './GIF/Gif.js'
import Button from './Button/Button.js';
import About from './About/About.js';
import Sun from './Sun/Sun.js'



function App() {
  return (
    <div className="App">

      <div className='container'>
        <City/>
        <Menu/>
      </div>    

      <div className='container'>
        <About/>
      </div>

      <div className='container'>
        <Sun/>
        <Cards/>
      </div>

      
      
      

    </div>
  );
}

export default App;
