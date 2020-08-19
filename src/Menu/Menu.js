import React from 'react'
import './Menu.css'

const Menu = (props) => {
    return (
        
        <div id='menu'>
             <div id='nav'>
                <ul>
                    <li className="shake-slow"><a href='#home'>Home</a></li>
                    <li className="shake-slow"><a href='#about'>About</a></li> 
                    <li className="shake-slow"><a href='https://cunytechprep.nyc' target='_blank'><img id='logo-img' src='./img/logo.png'></img></a></li>                                     
                    <li className="shake-slow"><a href='#features'>Features</a></li>
                    <li className="shake-slow"><a href='https://github.com/cosmicRover/CTP-Portable' target='_blank'><img className='btn' src='./img/downloadnow.png'></img></a></li>
                </ul>
            </div>            

        <div id='title-container'>
            <h1 className='title shake-slow'>CTP PORTABLE</h1>
        </div>

        </div>
    );
}
 
export default Menu;