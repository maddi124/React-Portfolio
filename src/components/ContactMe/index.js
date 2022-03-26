import React from "react";

function ContactMe() {
return (
<div class="container contactform ">
<h3 class="textform">Contact Form</h3>  
    <form>
        <div class="form-group">
            <label for="fname" placeholder="First Name">First Name</label>
            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
        </div>
        <div class="form-group">
            <label for="Lname" placeholder="Last Name">Last Name</label>
            <input type="text" class="form-control" id="Lname" placeholder="Last Name"/>
        </div>
        <div class="form-group">
            <label for="phone" placeholder="Phone Number">Phone Number</label>
            <input type="text" class="form-control" id="phone" placeholder="(###)###-####"/>
        </div>
        <div class="form-group">
        <label for="message" placeholder="message">Message</label>
        <textarea class="form-control" id="message" ></textarea>
        </div>
        <input type="submit" class="submit"value="Submit"/>
    </form>
</div>
);
}
export default ContactMe;