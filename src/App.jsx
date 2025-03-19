import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './fonts.css';
import NavBar from './components/NavBar';
import SplashCursor from './components/AnimatedComponents/SplashCursor';
import FluidCursor from './components/AnimatedComponents/FluidCursor';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Introduction from './pages/Introduction';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-light min-vh-100 lato-regular">
        <div className={`position-absolute  w-100 bg-transparent`}>
          <NavBar />
        </div>
        <div className={`  overflow-hidden`}>
          {/* <SplashCursor /> */}
          <Introduction />
          {/*  <Experience /> */}
          {/*  <Projects /> */}
          {/*  <Skills /> */}
          {/*  <FluidCursor /> */}
        </div>
      </div>
    </>
  );
}

export default App;
