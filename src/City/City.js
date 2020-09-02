import React from 'react'
import Sun from '../Sun/Sun.js'
import './City.css'

const City = (props) => {
    return (        
        <div>
            <div id='sky'></div>
            <div id='city'></div>
            <Sun />
        </div> 
    );
}

export default City;