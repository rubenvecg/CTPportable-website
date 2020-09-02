import React from 'react'
import './Gif.css'

const Gif = (props) => {
    return (
        
            <img id={props.id} src={props.source} width={props.width+'px'} height={props.height+'px'}></img>
       
    );
}
 
export default Gif;