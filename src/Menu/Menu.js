import React from 'react'
import './Menu.css'

const toggleButton = () => {
    let button = document.getElementById('toggle-btn');
    let menu = document.getElementById('nav');

    let closeBtn = '<p>✖</p>';
    let openBtn = '<p>☰</p>';
    button.innerHTML = (button.innerHTML == openBtn) ? closeBtn : openBtn; 

    menu.classList.toggle('collapsed');
    button.classList.toggle('fixed-left');
    
    
};

const Menu = (props) => {
    return (
        
        <div id='menu'>
            <div id='nav'>
                <ul>
                    <li className='shake-slow' id='home-btn'><a href='#home'>Home</a></li>
                    <li className='shake-slow' id='about-btn'><a href='#about'>About</a></li>
                    <li className='shake-slow' id='logo-btn'><a href='https://cunytechprep.nyc' target='_blank'><img id='logo-img' src='./img/logo.png'></img></a></li>                                     
                    <li className='shake-slow' id='features-btn'><a href='#features'>Features</a></li>
                    <li className='shake-slow' id='download-btn'><a href='https://github.com/cosmicRover/CTP-Portable' target='_blank'><img className='btn' src='./img/downloadnow.png'></img></a></li>
                </ul>
            </div>
            <div id='toggle-btn' onClick={toggleButton}><p>✖</p></div>
        </div>  
    
    );
}
 
export default Menu;