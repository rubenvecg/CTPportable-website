import React from 'react'
import './Menu.css'

const Menu = (props) => {
    return (
        
        <div id='menu'>
             <div id='nav'>
                <ul>
                    <li class='left-item'><a href='#'>Home</a></li>
                    <li class='left-item'><a href='#'>About</a></li>
                                      
                    <li class='right-item'><a href='#'>Features</a></li>
                    <li class='right-item'><a href='#'><img className='btn' src='./img/downloadnow.png'></img></a></li>
                </ul>
            </div>            

        <div id='title-container'>
            <h1 className='title'>CTP PORTABLE</h1>
        </div>

        </div>
    );
}
 
export default Menu;