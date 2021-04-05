import React from 'react';
import Cards from '../components/ProjectContainer/Cards'
import ProjectsPage from './Projects'
import './about.css'
import emailjs from 'emailjs-com';
import ModalContainer from '../components/ProjectContainer/ModalContainer';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

 



const AboutPage= () => {

 

   

    

    return(

        <div className ="welcome-about" id = "AboutPage">
            <div className = "about-text">
            <h1>Hello, I'm <mark className ="name-style"> Rodi Gemici-Bektas</mark>.</h1>
            <h1>I'm a Computer Science Graduate.</h1>

            
            <ul className = "social-buttons">
            <li><a className ="download-text" href='https://www.linkedin.com/' > Linkedin </a> <i className="fab fa-linkedin"></i></li>
            <li><a className ="download-text" href='https://github.com/rodigb' > Github </a> <i className="fab fa-github"></i> </li>  
             
            <li>London, UK <i class="fas fa-map-marker-alt"></i></li>
            <li><a className ="download-text" href='./CV' > Resume/CV</a> <i class="fas fa-download"></i> </li>  
            <li> <a className = "email-about" href={"mailto:rodix08@gmail.com"}>Email <i class="fas fa-envelope"></i></a></li>  
            

            </ul>

            <button className="projects-button"><Link
                    activeClass="projects-active"
                    to="ProjectsPage"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >View my projects <i class="fas fa-sign-in-alt"></i></Link></button>
            </div>
           

        </div>
        

        

      
    );

        

}
        
        

   

        
       
     
    


export default AboutPage;