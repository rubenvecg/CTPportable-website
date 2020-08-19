import React from 'react'
import './City.css'

const City = (props) => {
    return (        
        <div className='container'>
            <div id='city' className='container'></div>
            <div id='sun-container' className='container'>
                <div id='sun-offset'></div>
                <div id='sun'></div>
            </div>
        </div> 
    );
}

export default City;