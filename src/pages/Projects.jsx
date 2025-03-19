import React, { useEffect, useRef } from 'react';
import Container from '../components/Container';
import s from './Projects.module.css';
import { profileImage } from '../constants/imagesAndIcons';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const animate = card => {
    console.log('card', card);
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 97%',
          end: 'top 0%',
          markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );
  };

  useGSAP(() => {
    // Select all elements with the class 'card'
    const cards = document.querySelectorAll('.card');

    // Loop through each card and apply the animation
    cards.forEach((card, index) => {
      animate(card);
    });
  }, []);

  return (
    <>
      <Container>
        <div className={` tempBorder  d-flex flex-column tempBorder3  align-items-center gap-3 `}>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div style={{ minWidth: '80vw' }} className={`border card border border-primary  tempBorder h70  py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
