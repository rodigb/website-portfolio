import React from 'react';
import "./CV.css";
import pdf from "../files/cvrodi.pdf";
 
 
function CvPage() {

    window.history.replaceState(null, null, "/")
    return(
        window.location.replace(pdf), "_blank"
        // window.location.href = './MainPage'
        
    )
}

export default CvPage;

