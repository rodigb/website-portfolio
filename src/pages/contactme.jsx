import React from 'react'
import ModalContainer from '../components/ProjectContainer/ModalContainer';
import "./contactme.css";
import emailjs from 'emailjs-com';



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



function ContactMe() {
    return (


        <div className ="contactnav" id = "ContactMe">
            
             {/* <div className ="contactbar">
                 Links
            <ModalContainer></ModalContainer>
             

            </div> */}

            
               
            <div className="all-left">
            <div className="left-column">
                <h1 className = "interests-title">Areas of Interests </h1>
            <div className="contact-info">

                <div className="grid-container1"><h1><i class="fas fa-cloud"></i></h1><br></br>Cloud, I have deployed websites on the cloud and have keen interest in AWS and Google Cloud</div>
                <div className="grid-container2"><h1><i class="fab fa-html5"></i></h1><br></br>Front end development, Using HTML, CSS and JavaScript as well as frameworks such as ReactJS, to develop websites.</div>
                <div className="grid-container3"><h1><i class="fas fa-database"></i></h1><br></br>Back end development, connected websites to MySQL databases.</div>

                <div className="grid-container4"><h1><i class="fas fa-pencil-alt"></i></h1><br></br>Enjoy designing clean simple UX, UI, Mobile, Website and App designs.</div>
                <div className="grid-container5"><h1><i class="fab fa-js-square"></i></h1><br></br>JavaScript, developed applications with JavaScript, and used frameworks such as ReactJS</div>
                <div className="grid-container6"><h1><i class="fas fa-laptop-code"></i></h1><br></br>Used programming languages such as C++ for development</div>
                                 
                </div>
                </div>

               

                



                </div>
          
            
            <div className="right-column">
            <div className="contact-container">   
            <form onSubmit={sendEmail}>
                    <div className="input-container">

                        <li className = "project1title">
                        <h2>Email Me</h2>
                        </li>
                        <lable className="input-label">Name: </lable>
                        <li className="name-input">
                            <input type="text" size = "30" placeholder="Name" name="name" required />
                        </li>
                        <lable className="input-label">Email: </lable>
                        <li className="email-input">
                            <input type="email" size = "30" className="form-control" placeholder="Email Address" name="email"
                            required/>
                        </li>
                        <lable className="input-label">Subject: </lable>
                        <li className="subject-input">
                            <input type="text" size = "30" className="form-control" placeholder="Subject" name="subject"
                            required/>
                        </li>
                        <lable className="input-label">Message: </lable>
                        <li className="message-input">
                            <textarea className="form-control" cols="31" rows="8" placeholder="Your message" name="message"
                            required></textarea>
                        </li>
                        <li className="submit-input">
                            <input type="submit" className="btn btn-info" value="SEND MESSAGE"></input>
                        </li>
                    </div>
                </form>
            </div>
            </div>
             
         
        </div>

        
    )
}

export default ContactMe
