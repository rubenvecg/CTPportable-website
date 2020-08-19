import React from 'react'
import './Gif.css'

const Gif = (props) => {
    return (
        <div className ='image'>
            <img id={props.id} src={props.source} width={props.width+'px'} height={props.height+'px'}></img>
        </div>
    );
}
 
export default Gif;