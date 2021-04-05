import React, { useEffect } from 'react';
import Cards from '../components/ProjectContainer/Cards'
import ProjectsPage from './Projects'
import AboutPage from './about'
import Contactme from "./contactme";
import CvPage from "./CV";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";





const MainPage= () => {

    useEffect(() => {
         Aos.init({duration: 2000});
    }, [])

   

    

    return(

        <div>
             
             <div data-aos="fade-right"><AboutPage></AboutPage></div>
            <div data-aos="fade-right"> <ProjectsPage></ProjectsPage></div>
            <div data-aos="fade-right"> <Contactme></Contactme></div>
             
            
        </div>


      
    );

        

}
        
        

   

        
       
     
    


export default MainPage;