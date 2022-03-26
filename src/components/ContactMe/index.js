import React from "react";

function ContactMe() {
return (
<div class="container">
<h3>Contact Form</h3>  
    <form>
        <div class="form-group">
            <label for="fname" placeholder="First Name">First Name</label>
            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
        </div>
        <div class="form-group">
            <label for="fname" placeholder="Last Name">Last Name</label>
            <input type="text" class="form-control" id="fname" placeholder="Last Name"/>
        </div>
        <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
        </div>
    </form>
</div>
);
}
export default ContactMe;