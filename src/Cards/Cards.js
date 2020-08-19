import React from 'react';
import './Cards.css';
import 'csshake/dist/csshake.min.css';
// import './img/index.html'

const Cards = (props) => {
    return (        
        <div className='container'>
            <div id='sun-container' className='container'>
                <div id='sun-offset'></div>
                <div id='sun'></div>
            </div>

            <div class="container flex-grid-thirds">
                <div class="col parent">
                    <img class="card1 shake-slow" src="/img/card1.gif"/>
                    <img class="button-card shake-slow" src="/img/view.png"/>
                </div>

                <div class="col  parent">
                    <img class="card1 shake-slow" src="/img/card2.gif"/>     
                    <img class="button-card shake-slow" src="/img/schedule.png"/>
                </div>
                <div class="col  parent">
                    <img class="card1 shake-slow" src="/img/card3.gif"/>
                    <img class="button-card shake-slow" src="/img/contact.png"/>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    );
}

export default Cards;