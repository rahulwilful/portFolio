import React from 'react';
import Container from '../components/Container';
import s from './Introduction.module.css';
import { profileImage, profileImage2 } from '../constants/imagesAndIcons';
import SplashCursor from '../components/AnimatedComponents/SplashCursor';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import StarBorder from '../components/AnimatedComponents/StarBorder';
import { globalDuration, navBarDelay } from '../constants/animationDelays';
import RotatingBorder from '../components/AnimatedComponents/RotatingBorder';

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useGSAP(() => {
    // Select all elements with the class 'card'
    const cards = document.querySelectorAll('.card');

    // Loop through each card and apply the animation

    gsap.fromTo(
      '.image',
      { opacity: 0, x: 100 },
      {
        delay: navBarDelay,
        opacity: 1,

        x: 0,
        duration: globalDuration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      '.name',
      { opacity: 0, y: 10 },
      {
        delay: navBarDelay + 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      '.positionTitle',
      { opacity: 0, y: 10 },
      {
        delay: navBarDelay + 1.5,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 100%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      '.introduction',
      { opacity: 0, y: 10 },
      {
        delay: navBarDelay + 2,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 100%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      '.introductionContainer',
      { opacity: 0, x: -100 },
      {
        delay: navBarDelay,
        opacity: 1,
        x: 0,
        duration: globalDuration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 100%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <>
      <SplashCursor Position={'absolute'} />
      <Container pt={30} pb={30} tempBorder={false}>
        <div className={`d-flex flex-column-reverse flex-lg-row   gap-4  w-100 h-100 align-items-center justify-content-evenly overflow-hidden`}>
          {/*  */}
          <div className={` ${s.intro} introductionContainer py-3 py-md-5 border shadow-s border-dark d-flex flex-column justify-content-center align-items-center px-3  px-md-4`}>
            <h1 className="gemeStonesRegular name">Rahul Patil</h1>

            <div className={`d-flex flex-column gap-3`}>
              <div>
                <h4 className="winkySans600 subText positionTitle text-center"> Full Stack Web And App Developer</h4>
              </div>
              <p style={{ textAlign: 'justify' }} className="delius-regular deliusRegular introduction">
                As a skilled full-stack developer passionate about software development, I have 18 months of experience with Vue, React, Node, Express, MongoDB, and SQL. Additionally, I have 4 months of hands-on experience with React Native for full-stack app development. With a strong foundation in software development principles, I am highly motivated and eager to learn. Seeking opportunities to apply my skills to real-world problems and grow both personally and professionally, I am committed to excellence. Eager to connect with experienced professionals, I am ready to bring your ideas to life as a dedicated software developer.
              </p>
            </div>
          </div>
          <div className={`image   d-flex justify-content-center align-items-center ${s.image}`}>
            <RotatingBorder tempBorder={false}>
              <div className={` image rounded overflow-hidden  `}>
                <img src={profileImage2} alt="" className={` h-100 w-100 objectFitContain`} />
              </div>{' '}
            </RotatingBorder>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Introduction;
