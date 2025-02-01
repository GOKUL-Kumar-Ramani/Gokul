import React from "react";
import './App.css';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Hero/>} />
          <div>
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
