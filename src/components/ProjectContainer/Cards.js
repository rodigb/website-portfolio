import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
 

function Cards(props) {

 
    return (

        <div className="cards">
            <h1 > Projects</h1>

            <div className = "cards__container">

                <div className= "cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="/images/image30.png" text = "E-Commerce peer-to-peer trading website, with live chat and messaging systems where users can create their accounts to upload products and list them for sale. Uses HTML, CSS, PHP and mySQL." label = "E-commerce website" 
                        path = "./projectlink1"></CardItem>
                        <CardItem src="/images/image2.png"
                         text = "A navigation application, where you can add roads, remove roads, add users and compute how much energy is required to reach the destination that utilizes OOP with Java."
                         label = "Navigation App" path = "./projectlink2"></CardItem>
                         <CardItem src="/images/image1.png"
                         text = "Arduino programmed as an alarm clock / timer. You can set a timer, where the alarm will change colour to red when the time is reached. Can be snoozed or turned off. Utilized C++."
                         label = "Alarm Clock" path = "./projectlink3"></CardItem>
                          
 
 
 
                    </ul>

                    <ul className="cards__items">
                        <CardItem src="/images/image4.png" 
                         text = "Developed a mobile application that tracked gym progress such as lifts, with notifications and allows you to compare your lifts to strength standard levels. Utilized Java."
                         label = "Gym Tracker" path = "./projectlink4" ></CardItem>
                        <CardItem src="/images/image5.png"
                         text = "This website was created to act as my online portoflio. Utilized ReactJS."
                         label = "Web Portfolio" path = "./projectlink5"></CardItem>
                          
 
                    </ul>
                     
                   
                
                     
                  

                    

                    
                    
                </div>
            </div>


            
        </div>
    )
}



export default Cards
 
