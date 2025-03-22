import React, { useEffect } from 'react';
import s from './NavBar.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplashCursor from './AnimatedComponents/SplashCursor';
import { globalDuration } from '../constants/animationDelays';
import StarBorder from './AnimatedComponents/StarBorder';
import { Link } from 'react-router-dom';

const NavBar = () => {
  useGSAP(() => {
    gsap.from('.nav-item', {
      delay: 1.2,
      duration: globalDuration,
      stagger: 0.2,
      ease: 'power.Out',
      y: '-10%',
      opacity: 0
    });
  }, []);

  useGSAP(() => {
    gsap.from('.container-fluid', {
      duration: 1.5,
      y: '-10%',
      ease: 'power.Out',
      scale: 0,
      opacity: 0
    });
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg  bg-transparent d-none d-lg-block   `}>
        <div className={`container-fluid bg-transparent  w70`}>
          {/*  <SplashCursor Position={'fixed'} /> */}
          <StarBorder as="container" className="w-100" color="red" speed="5s">
            <div className={`w-100  bg-transparent  rounded-5 overflow-hidden shadow-s`} style={{ padding: '2px' }}>
              <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon`}></span>
              </button>
              <div className={`collapse  navbar-collapse deliusRegular rounded-5`} id="navbarSupportedContent">
                <ul className={`navbar-nav me-auto mb-2 text-light  mb-lg-0  w-100 dFlex center gap-5  rounded-5`}>
                  <li className={`nav-item`}>
                    <Link to="/" className={`text-decoration-none text-light`}>
                      Introduction
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link to="/experience" className={`nav-link text-decoration-none active  text-light`} aria-current="page">
                      Experience
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link to="/skills" className={`nav-link text-decoration-none active text-light`} aria-current="page">
                      Skills
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link to="/projects" className={`nav-link text-decoration-none active text-light`} aria-current="page">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </StarBorder>
        </div>
      </nav>
      <div className={`w-100  bg-transparent    overflow-hidden shadow-s`} style={{ padding: '2px' }}>
        <button class="btn btn-transparent  p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i class="bi bi-list text-light fs-3"></i>
        </button>
      </div>

      <div class="offcanvas  glass2 text-light offcanvas-start  rounded-0 w70 " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h4 class="offcanvas-title gemeStonesRegular" id="offcanvasExampleLabel">
            Rahul Patil
          </h4>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body ">
          <ul className={`me-auto deliusRegular mb-2 text-light mb-lg-0 w-100 d-flex flex-column gap-5 fs-5 rounded-5`} style={{ listStyleType: 'none' }}>
            <li className={`nav-item`}>
              <Link to="/" className={`text-decoration-none text-light`}>
                Introduction
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/experience" className={`nav-link text-decoration-none active  text-light`} aria-current="page">
                Experience
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/skills" className={`nav-link text-decoration-none active text-light`} aria-current="page">
                Skills
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/projects" className={`nav-link text-decoration-none active text-light`} aria-current="page">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
