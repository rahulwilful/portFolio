import React, { useEffect } from 'react';
import Container from '../components/Container';
import s from './Experience.module.css';
import { profileImage } from '../constants/imagesAndIcons';
import ExperienceCard from '../components/Cards/ExperienceCard';
import { experirenceInformation } from '../constants/ExperienceInformation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { globalDuration, navBarDelay } from '../constants/animationDelays';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  console.log('Experience', experirenceInformation);

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
          start: 'top 97%',
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
          start: 'top 97%',
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
      <Container pb={50} pt={80} align={'start'} tempBorder={false}>
        <div className={`  w-100 h-100 d-flex flex-column  gap-5`}>
          {experirenceInformation.map((company, index) => (
            <div className={`${index % 2 == 0 ? 'startCard' : 'endCard'}`}>
              <ExperienceCard key={index} {...company} position={index % 2 == 0 ? 'start' : 'end'} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Experience;
