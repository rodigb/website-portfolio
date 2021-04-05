import { render } from '@testing-library/react';
import React, { Component, useImperativeHandle } from 'react';
import { MenuItems } from "./MenuItems";
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";



import './Navbar.css'
import ModalContainer from '../ProjectContainer/ModalContainer';


class Navbar extends Component{
    state = { clicked:false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        
        return(
            <AppBar position ="fixed">
            <nav className="NavbarItems">
                <Link className="navbar-logo" 
                
                to="AboutPage"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}

                ><h1 className="menu-item"><i class="fas fa-home"></i> Home </h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                    
                     
                </div>
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                
                <li className="nav-links"><Link
                    activeClass="about-active"
                    to="AboutPage"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                >ABOUT</Link></li>

                <li className="nav-links"><Link
                    activeClass="projects-active"
                    to="ProjectsPage"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >PROJECTS</Link></li>
                <li className="nav-links"><Link
                    activeClass="contact-active"
                    to="ContactMe"
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                >CONTACT ME</Link>
                </li>
                {/* <li className="nav-links"><Link
                    activeClass="cv-active"
                    to="cv-section"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                >MY CV / RESUME</Link>
                </li> */}
                 

                
                    
                    {MenuItems.map((item, index) => {
                        return(

                            

                            

                            
                            <li key={index}>
                                <a className={item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            
                                
                            </li>
                            
                            
                           
                        )
                    })}
                </ul>

                
            </nav>
            </AppBar>
        )
    }
}

export default Navbar 