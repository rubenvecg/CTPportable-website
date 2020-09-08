import React from 'react';
import Gif from '../GIF/Gif.js'
import './Features.css';

import 'csshake/dist/csshake.min.css';

const Features = (props) => {
    return (   
                      
            <div id='features'>  

                <div class="card-grid">                    
                    <div class="card-container">
                        <div className='gif-container'><Gif className='card-gif' source='/img/robot1.gif' width='120' height='120'/></div>
                        <img class="card-button" src="/img/view.png"/>
                    </div>

                    <div class="card-container">
                        <div className='gif-container'><Gif className='card-gif' source='/img/robot2.gif' width='120' height='120'/></div>
                        <img class="card-button" src="/img/schedule.png"/>
                    </div>
                            
                    <div class="card-container">
                        <div className='gif-container'><Gif className='card-gif' source='/img/robot3.gif' width='120' height='120'/></div>
                        <img class="card-button" src="/img/contact.png"/>
                    </div>
                    
                </div>
            </div>
            
        
    );
}

export default Features;