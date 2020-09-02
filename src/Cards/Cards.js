import React from 'react';
import './Cards.css';
import 'csshake/dist/csshake.min.css';
// import './img/index.html'

const Cards = (props) => {
    return (   
                      
            <div id='features' class='first'>
                <div class="card-grid">
                    <div class="card-container">
                        <img class="card" src="/img/flashcard1.png"/>
                        <img class="card-button" src="/img/view.png"/>
                    </div>

                    <div class="card-container">
                        <img class="card" src="/img/flashcard2.png"/>     
                        <img class="card-button" src="/img/schedule.png"/>
                    </div>

                    <div class="card-container">
                        <img class="card" src="/img/flashcard3.png"/>
                        <img class="card-button" src="/img/contact.png"/>
                    </div>
                </div>
            </div>
            
        
    );
}

export default Cards;