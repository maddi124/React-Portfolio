import React from 'react';
import {GoMarkGithub } from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
function Footer(){
return (
<div className='containers '>
    <div className='row justify-content-center'>
        <div className='col-1'>
            <GoMarkGithub size="50px"/>
        </div> 
        <div className='col-1'>
            <BsLinkedin size="50px"/>
        </div>
        <div className='col-1'>
            <AiFillTwitterCircle size="50px"/>
        </div>
    </div>
</div>

);
}
export default Footer;