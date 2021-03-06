import React from 'react';
import {GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";

function Footer(){
return (
<div class='containers'>
    <div class='row justify-content-center'>
        <div class='col-1'>
        <a href="https://github.com/maddi124">
            <GoMarkGithub 
                size="50px" 
                color="#9EC5AB"/>
        </a>
        </div> 
        <div class='col-1'>
        <a href="https://www.linkedin.com/in/madeline-garcia-cabrera-790580210/">
            <BsLinkedin 
                size="50px"  
                color="#9EC5AB"/>
        </a>
        </div>
        <div class='col-1'>
        <a href="https://twitter.com">
            <AiFillTwitterCircle 
                size="50px" 
                color="#9EC5AB"/>
        </a>        
        </div>
    </div>
</div>

);
}
export default Footer;