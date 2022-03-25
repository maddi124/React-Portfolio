import React from "react";
import avatarImage from "../../assets/cover/avatar.png";


function AboutMe() {
return (
<section>
    <div class="container">
    <div class="box">
        <h5 class="aboutme">My name is Madeline. I have a associate's degree in Computer Engineering. I'm currently changing my career to web development. I enrolled in this coding bootcamp to learn skills that would help me create an <strong>AMAZING</strong> websites for companies or individual. I am a team-player and excellent problem solver. I may be a beginner, but I'm always ready to learn.</h5>
    </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <img src={avatarImage} style={{ width: "30%" }} alt="placeholder" class="avatar"/> 
            </div>
        </div>
    </div>
 </section>

);
}
export default AboutMe;