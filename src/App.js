
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import ProjectsPage from "./pages/Projects";
import CvPage from "./pages/CV";
import Modal from 'react-modal';
import Project1Page from "./pages/projectlink1";
import Project2Page from "./pages/projectlink2";
import Project3Page from "./pages/projectlink3";
import Project4Page from "./pages/projectlink4";
import Project5Page from "./pages/projectlink5";
import Project6Page from "./pages/projectlink6";

 

 

function App() {
  return (
    

  

    

    <div className="App">
      <div className="page-container">
      
     
     <Navbar></Navbar>
     
     
     
     
     

       <Router>
       <Switch>
       <Redirect exact from ="/" to = "/MainPage"/>
       <Route exact path ="/MainPage" component={MainPage}/>
       <Route exact path ="/Projects" component={MainPage}/>
       <Route exact path ="/CV" component={CvPage}/>
       <Route exact path = "/404" component = {NotFoundPage} />
       <Route exact path = "/projectlink1" component = {Project1Page} />
       <Route exact path = "/projectlink2" component = {Project2Page} />
       <Route exact path = "/projectlink3" component = {Project3Page} />
       <Route exact path = "/projectlink4" component = {Project4Page} />
       <Route exact path = "/projectlink5" component = {Project5Page} />
       <Route exact path = "/projectlink6" component = {Project6Page} />
        
        
      

       </Switch>


     </Router>
     </div>
     <div className="footer-position">
    <Footer>  </Footer></div>
     
    </div>

  );
}

export default App;
