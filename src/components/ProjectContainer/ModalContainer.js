import React, { useState } from 'react';

import './ProjectContainer.css';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";


Modal.setAppElement('#root')
 

function ModalContainer(){

    

    const [modalisOpen, setModalIsOpen] = useState(false)
    // 
    //
    


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_qmfp5xh', 'template_urwwi38', e.target, 'user_vv8OcVl4cepXPKd91Un4r')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    } 


    return(

        <div className = "modalcontainer">

            <div className ="modalcontainer1">
           
            <div className = "modal" id = "modal1">

            <button className = "modalbuttons" onClick={() => setModalIsOpen(true)}>
                <h1><i class="fas fa-envelope"></i> email</h1>
                </button>
            <Modal className ="modalbox" isOpen={modalisOpen} onRequestClose={()=> setModalIsOpen(false)}>
                <div className = "modalinfo">
            <button className = "closebtn" onClick={() => setModalIsOpen(false)}>X</button>
                
               

                
            <div>
           
            <div className="right-column">
            <div className="contact-container">
            <form onSubmit={sendEmail}>
                    <div className="input-container">

                        <li className = "project1title">
                        <h2>Email Me</h2>
                        </li>
                        <li className="name-input">
                            <input type="text" placeholder="Name" name="name"/>
                        </li>
                        <li className="email-input">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </li>
                        <li className="subject-input">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </li>
                        <li className="message-input">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </li>
                        <li className="submit-input">
                            <input type="submit" className="btn btn-info" value="SEND MESSAGE"></input>
                        </li>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>

                

                 

             

                
            </Modal>
            </div>
            </div>

  




        </div>
    );
};





export default ModalContainer;

