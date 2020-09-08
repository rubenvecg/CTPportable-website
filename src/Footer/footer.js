import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <div className='footer-container'>
            

                <div id='icons-cont'>
                    <div id='icons'>
                        <div><a href='https://cunytechprep.nyc/' target='_blank'><img id='logo-icon' src='/img/logo.png'></img></a></div>
                        <div></div>
                        <div></div>
                        <div id='right-icons'>
                             <div><a href='https://facebook.com/' target='_blank'><img className='social-media-icon' src='/img/facebook.png'></img></a></div>
                             <div><a href='https://twitter.com/' target='_blank'><img className='social-media-icon' src='/img/instagram.png'></img></a></div>
                             <div><a href='https://linkedin.com/' target='_blank'><img className='social-media-icon' src='/img/linkedin.png'></img></a></div>
                        </div>

                    </div>
                </div>
            
            
        </div>
       
    );
}
 
export default Footer;