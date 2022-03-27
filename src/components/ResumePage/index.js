
import React from "react";

function ResumePage() {
return (
<div class="container">
    <div class="row">
        <h2>Education</h2>
        <div class="col">
            <p>Associate in Applied Science, Computer Engineering Technology, York Technical College, Rock Hill, 
SC. Graduated May 2021, GPA- 2.82</p>
<p>The Coding Boot Camp at UNC Charlotte, Graduating April 2022 </p>
        </div>
    </div>
      <h2 class="skills">Skills</h2>
    <div class="row">
      <h3>HTML/CSS</h3>
        <div class="col">
            <div class="progress">
                <div class="progress-bar w-75"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
        </div>
    </div>
    <div class="row">
      <h3>JavaScript/jQuery</h3>
        <div class="col">
            <div class="progress">
                <div class="progress-bar w-50"  role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
    </div>
    <div class="row">
      <h3>MERN Stack</h3>
        <div class="col">
            <div class="progress">
                <div class="progress-bar w-75"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
        </div>
    </div>
    <div class="row">
      <h3>MySQL</h3>
        <div class="col">
            <div class="progress">
                <div class="progress-bar w-50"  role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
    </div>
</div>
);
}
export default ResumePage;