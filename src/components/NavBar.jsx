import React, { useEffect } from 'react';
import s from './NavBar.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplashCursor from './AnimatedComponents/SplashCursor';
import { globalDuration } from '../constants/animationDelays';
import StarBorder from './AnimatedComponents/StarBorder';

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
      <nav className={`navbar navbar-expand-lg  bg-transparent  `}>
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
                    <a className={`navbar-brand text-light`} href="#">
                      Introduction
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a className={`nav-link active  text-light`} aria-current="page" href="#">
                      Experience
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a className={`nav-link active text-light`} aria-current="page" href="#">
                      Skills
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a className={`nav-link active text-light`} aria-current="page" href="#">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </StarBorder>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
