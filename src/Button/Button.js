import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div className='button'>
            <a href={props.link} target='_blank'><img className='btn' src='./img/downloadnow.png'></img></a>
        </div>
    );
}
 
export default Button;