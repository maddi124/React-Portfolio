import React from "react";
import avatarImage from "../../assets/cover/avatar.png";


function AboutMe() {
return (
<div class="container">
 <div class="box">
    <h5 class="aboutme">My name is Madeline. I have a associate's degree in Computer Engineering. I'm currently changing my career to web development. I enrolled in this coding bootcamp to learn skills that would help me create an <strong>AMAZING</strong> websites for companies or individual. I am a team-player and excellent problem solver. I may be a beginner, but I'm always ready to learn.</h5>
 </div>
<div >
 <img src={avatarImage} style={{ width: "50%" }} alt="placeholder" /> 
 </div>
</div>

 

);
}
export default AboutMe;