import React from "react";
import profileicon from './profileicon.jpg';
import './App.css';

const Profilecard=()=>{


    return(
       <div>
        <div className="pc">
            <div className="gradiant"> </div>
            <div className="profile-pic">
                <img src={profileicon}  alt=""  />
                <div className="profile-title"> Frontend-Developer</div>
                <div className="profile-description">Frontend Developer | React.js | JavaScript | Redux | HTML | CSS | Bootstrap | Java | SQL | Web Development Intern @Codsoft & PinnacleLabs | Trainee @AccioJob | Open to Full-Time & Internship Roles</div>


            </div>
            <div className="profile-button" ><a href="mailto:sandeepbikshala@gmail.com"> Contact Me</a></div>


        </div>
       </div>
    )



  
}
export default Profilecard;