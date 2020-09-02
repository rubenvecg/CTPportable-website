import React from 'react'
import Gif from '../GIF/Gif.js'
import Button from '../Button/Button.js'
import './About.css'

const About = (props) => {
    return (
        <div id='about'>
          <div id='background' className='first'></div>            
          <div className='grid-container'>
            <div className='main-grid'>

              <div id='title' className='inner-grid'><h1>CTP REMOTE LEARNING IN ONE PLACE</h1></div>
              <div id='left-grid' className='inner-grid'>
                  <div><Gif source='/img/biggerrobot1.gif' width='100' height='100'/></div>
                  <div>
                    <h1>MOCK INTERVIEWS</h1>
                    <br></br>
                    <p>Practice your soft skills by pairing up  with fellow students
                      for mock interviews.</p>
                  </div>
              </div>
              <div id='middle-grid' className='inner-grid'>
                  <div><Gif id='preview' source='/img/phone.png' width='375' height='375'/></div>
                  <div><Button link='https://github.com/cosmicRover/CTP-Portable'/></div>
              </div>
              <div id='right-grid' className='inner-grid'>
                  <div>
                    <h1>SESSION UPDATES</h1>
                    <br></br>
                    <p>Stay up to date with your homeworks by getting up to date assignments.</p>
                  </div>
                  <div><Gif source='/img/biggerrobot.gif' width='231' height='231'/></div>
              </div>          
            </div>  
          </div>
      </div>      
    );
}
 
export default About;