import React from "react";
import ProjectImage1 from "../../assets/cover/projectholder4.png";
import ProjectImage2 from "../../assets/cover/Case_tracker.png";
import ProjectImage3 from "../../assets/cover/note-taker.png";

function Workpage() {
return (
<div class="container projectbox">

    <h1 class="workheader">Some Of My Work</h1>

        <div class="row ">
            <div class="col ">
                <a href="https://lernantino.github.io/run-buddy/"> 
                    <img class="card-img-top " src={ProjectImage1}  alt="Running-Buddy"/>
                </a>
                <div class="workinfo fade">
                    <h5>Running Buddy</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col ">
                <a href="https://fathomless-cliffs-14331.herokuapp.com/"> 
                    <img class="card-img-top " src={ProjectImage2}  alt="Case-Tracker"/>
                </a>
                <div class="workinfo fade">
                    <h5>Case Tracker</h5>
                    <p>This application is a kanban for a company to use to track employee cases.
    The user story is: An employer would like to keep track of it's employees exposure to Covid19. It uses this information to make sure that the employee is quarentened for the correct number of days to keep others safe and to stop the spread of Covid19. 
    It also uses this information to pass onto the contact tracing office who job it is to notify potential employees of exposure. Each employee case is managed initially through the employee's direct magager and this information is included in each case. The date of sympotms and positive testing are also documented. 
    The kanban is organized with cases under the catagories of pending and completed. </p>
                </div>
            </div>
            <div class="col">
                <a href="https://young-anchorage-76744.herokuapp.com/">
                    <img class="card-img-top " src={ProjectImage3}  alt="Running-Buddy"/>
                </a>
                <div class="workinfo fade">
                    <h5>Note Taker</h5>
                    <p> We were given a starter code for an application called Note Taker that used to write ans save notes. We had to use an Express.js back-end that will save and retrieve note data from a JSON file.</p>
                </div>
            </div>
        </div>

</div>

);
}
export default Workpage;