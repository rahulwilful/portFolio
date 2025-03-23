import React, { useEffect, useRef } from 'react';
import Container from '../components/Container';
import s from './Projects.module.css';
import { profileImage } from '../constants/imagesAndIcons';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectInformation } from '../constants/ProjectInformation.js';
import ProjectCard from '../components/Cards/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  console.log('projects: ', projectInformation);
  const animateStartCards = card => {
    //console.log('card', card);
    gsap.fromTo(
      card,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        delay: 0.5,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );
  };

  const animateEndCards = card => {
    //console.log('card', card);
    gsap.fromTo(
      card,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        delay: 0.5,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );
  };

  useGSAP(() => {
    // Select all elements with the class 'card'
    const startCards = document.querySelectorAll('.startCard');
    const endCards = document.querySelectorAll('.endCard');

    // Loop through each card and apply the animation
    startCards.forEach((card, index) => {
      animateStartCards(card);
    });

    endCards.forEach((card, index) => {
      animateEndCards(card);
    });
  }, []);

  return (
    <>
      <Container pb={50} pt={30} tempBorder={false} display={'start'}>
        <div className={` h-100    d-flex flex-column   align-items-center gap-3  `}>
          <div className={` h-100`}>
            {projectInformation.map((detail, index) => (
              <div className={`${index % 2 == 0 ? 'startCard' : 'endCard'} `}>
                <ProjectCard {...detail} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
