import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <div className='footer-container'>
            <div className='blue-bg'>

                <div id='icons-cont'>
                    <div id='icons'>
                        <div><img id='logo-icon' src='/img/logo.png'></img></div>
                        <div></div>
                        <div></div>
                        <div id='right-icons'>
                             <div><img className='social-media-icon' src='/img/facebook.png'></img></div>
                             <div><img className='social-media-icon' src='/img/instagram.png'></img></div>
                             <div><img className='social-media-icon' src='/img/linkedin.png'></img></div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
       
    );
}
 
export default Footer;