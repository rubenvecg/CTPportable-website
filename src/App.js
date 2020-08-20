import React from 'react';
import './App.css';
import City from './City/City.js';
import Menu from './Menu/Menu.js'
import Cards from './Cards/Cards.js'
import Gif from './GIF/Gif.js'
import Button from './Button/Button.js';
import Footer from './Footer/footer.js'


function App() {
  return (
    <div className="App">
      <City/>
      <Menu/>
      <div id='about' className='container'>
          <div id='background' className='container'></div>        
          
          <div className='grid-container'>
            <div className='main-grid'>

              <div id='title' className='inner-grid'><h1>CTP REMOTE LEARNING IN ONE PLACE.</h1></div>
              <div id='left-grid' className='inner-grid'>
                  <div className="shake-slow"><Gif source='/img/biggerrobot1.gif' width='200' height='200'/></div>
                  <div>
                    <h1>MOCK INTERVIEWS</h1>
                    <br></br>
                    <p className="margin">Practice your soft skills by pairing up  with fellow students
                      for mock interviews.</p>
                  </div>
              </div>
              <div id='middle-grid' className='inner-grid'>
                  <div><Gif id='preview' source='/img/phone2.gif' width='230' height='400'/></div>
                  <div className="shake-slow"><Button  link='https://github.com/cosmicRover/CTP-Portable'/></div>
              </div>
              <div id='right-grid' className='inner-grid'>
                  <div>
                    <h1>SESSION UPDATES</h1>
                    <br></br>
                    <p className="margin">Stay up to date with your homeworks by getting up to date assignments. </p>
                  </div>
                  <div className="shake-slow bigger-robot"><Gif source='/img/biggerrobot.gif' width='331' height='331' /></div>
              </div>          
            </div>  
          </div>
      </div>      
      <div className='container'>
      <Cards/>
      </div>
      <div className='container footer-margin'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
