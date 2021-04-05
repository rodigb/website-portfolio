import React from 'react';
import './404.css';
import './index.jsx'


const NotFoundPage = () => {

    setTimeout(function(){ window.location="./Mainpage"; },3000);
    

    return(
        <div className = "error__text"><h1>404 Page Not Found! :(</h1>
        <h1> Redirecting...</h1>
         
        </div>
    );
};

export default NotFoundPage;