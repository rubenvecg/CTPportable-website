import React from 'react';
import './App.css';
import City from './City/City.js';
import Menu from './Menu/Menu.js'
import Cards from './Cards/Cards.js'
import Gif from './GIF/Gif.js'
import Button from './Button/Button.js';
import About from './About/About.js';
import Sun from './Sun/Sun.js'
import Footer from './Footer/Footer.js'



function App() {
  return (
    <div id='app-container'>

    <Menu/>

    <div id='home' class='container'>

            <div id='title-container'>
                <h1 className='title shake-slow'>CTP PORTABLE</h1>            
            </div>

            <City/>
    </div>

    <div class='container section'>
      <About/>
    </div>

    <div class='container section'>
      <Cards/>
    </div>

    <Footer/>

    </div>
  );
}

export default App;
