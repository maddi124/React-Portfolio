import React from 'react';
import Nav from './components/Nav';
import Home from './components/Homepage';
import Footer from './components/Footer';
import AboutME from './components/AboutMe';
import ContactMe from './components/ContactMe';
 import Workpage from './components/Workpage';
 import ResumePage from './components/ResumePage';
// import Projects from './components/Projects';
import './assets/style.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
return (
<Router>
  <div>
    <Nav/>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/AboutMe" exact element={<AboutME />} />
    <Route path="ContactMe" exact element={< ContactMe/>} />
    <Route path="/Workpage" exact element={<Workpage />} />
    <Route path="/ResumePage" exact element={< ResumePage/>} />
    </Routes>
    <Footer/>
  </div>
</Router>
);
}
export default App;
