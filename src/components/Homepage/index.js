import React from 'react';
import coverImage from "../../assets/cover/coding.jpg";
function Home () {
    return (
        <section>
        <img src={coverImage} style={{ width: "100%" }} alt="cover" />
            <h1 id="about">Who am I?</h1>
      </section>
    
    );
}
export default Home;