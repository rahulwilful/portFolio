import { useState } from 'react';
import './App.css';
import './fonts.css';
import NavBar from './components/NavBar';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Introduction from './pages/Introduction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { backgroundImage } from './constants/imagesAndIcons';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-light min-vh-100 lato-regular position-relative " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <div className={`  w-100 bg-transparent`}>
          <NavBar />
        </div>
        <div className={`overflow-hidden  w-100  `}>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/introduction" element={<Introduction />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
