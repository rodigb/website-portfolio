import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import ModalContainer from '../ProjectContainer/ModalContainer';
 
function Footer() {
    return (
        <div className="footer-container">
            <div className ="container">
            {/*  <div className ="footer-links">
               <div className = "footer-link-wrapper">
                    <div className = "footer-link-items">
                        <h2>About this website</h2>
                        <p> askdjaksjdksa</p>
                        <p>asduhjsadjsd</p>
                    </div>
                    
                    <div className = "footer-link-items">
                        <h2>About this website</h2>
                        <p>askdjaksjdksa</p>
                        <p>asduhjsadjsd</p>
                    </div>
                </div>
                <div className = "footer-link-wrapper">
                    <div className = "footer-link-items">
                        <h2>About this website</h2>
                        <p>askdjaksjdksa</p>
                        <p>asduhjsadjsd</p>
                    </div>
                    
                    <div className = "footer-link-items">
                        <h2>About this website</h2>
                        <p>askdjaksjdksa</p>
                        <p>asduhjsadjsd</p>
                         
                    </div>
                </div> 

                

                
                 
                
                 
                </div>*/}
                <section className = "social-media">
                    <div className = "social-media-wrap">
                        <div className = "footer-logo" id="Footer">
                            <ul className = "socials-list">

                           <li> <a className = "email-button" href={"mailto:rodix08@gmail.com"}>rodix08@gmail.com <i class="fas fa-envelope"></i></a></li>
                           
                           <li> <a className = "socials-button1" href = "./projectlink5"> Linkedin <i className="fab fa-linkedin"></i></a></li>
                        
                            <li> <a className = "socials-button2" href = "./projectlink6">Github <i className="fab fa-github"></i></a></li>
                             
                            </ul>

                            
                            
                        </div>
                    </div>
                </section>
                 
                
                </div>
            
        </div>
    )
}

export default Footer;
