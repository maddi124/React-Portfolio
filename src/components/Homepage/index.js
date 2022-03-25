import React from 'react';
import coverImage from "../../assets/cover/coding.jpg";

function Home () {
    return (
        <section>
        <img src={coverImage} style={{ width: "100%" }} alt="cover"/>
        <div class='card bg-transparent'>
            <div class='card-body'>
            <h1 class="card-title largetext">I am Madeline Cabrera</h1>
            <p class="card-text smalltext">Web Developer</p>
            </div>
        </div>    
      </section>
    
    );
}
export default Home;