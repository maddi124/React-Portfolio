import React from 'react';

function Nav () {
return (
<header>
  <div className='container'>
    <nav className="nav justify-content-center ">
      <a className="nav-link" href="/">Home</a>
      <a className="nav-link" href="/AboutMe">About Me</a>
      <a className="nav-link" href="/ContactMe">Contact Me</a>
      <a className="nav-link" href="/Workpage">Works</a>
      <a className="nav-link" href="/ResumePage">Resume</a>
    </nav>
  </div>
</header> 

);

}

export default Nav;