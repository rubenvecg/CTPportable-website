import React from 'react'
import Sun from '../Sun/Sun.js'
import './City.css'

const City = (props) => {
    return (        
        <div id='home' className='container'>
            <div id='city' className='container'></div>
            <Sun />
        </div> 
    );
}

export default City;