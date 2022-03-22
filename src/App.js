import React from 'react';
import Nav from './components/Nav';
import Home from './components/Homepage';
import Footer from './components/Footer';
import './assets/style.css';

function App() {
return (
  <div>
  <Nav></Nav>
    <main>
<Home></Home>
<Footer/>
    </main>
  </div>
);
}
export default App;
