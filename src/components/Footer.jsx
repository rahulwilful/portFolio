import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { animateElements } from '../constants/constantFunctions/OnScrollAnimate';

const Footer = () => {
  useEffect(() => {
    animateElements(['.contactInfo', '.phone', '.email', '.copyright']);

    /*  gsap.fromTo(
      '.contactInfo',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 0.2,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contactInfo',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      '.phone',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 0.5,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.phone',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      '.email',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 0.7,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.email',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      '.copyright',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.copyright',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    ); */
  }, []);

  return (
    <footer className=" text-center text-light text-lg-start rounded-0  border-top border-secondary border-opacity-50  px-3 glass1  ">
      <div className={` `}>
        <div className=" p-4">
          <div className="w-100">
            <h5 className="text-uppercase winkySans600 detail contactInfo text-center">Contact Information</h5>
            <div className={`d-flex flex-wrap gap-0 text-light gap-md-3 flex-column flex-md-row w-100 justify-content-evenly`}>
              <p className={`deliusRegular detail phone `}>
                <i class="bi bi-whatsapp"></i>:{' '}
                <a className={`text-light text-decoration-none`} href="tel:+919767589256">
                  +91 9767589256
                </a>
              </p>
              <p className={`deliusRegular detail email `}>
                <i class="bi bi-envelope-at-fill"></i>:{' '}
                <a className={`text-light text-decoration-none`} href="mailto:rahulwilful@gmail.com">
                  rahulwilful@gmail.com
                </a>
              </p>
              <p className={`deliusRegular detail email `}>
                <i class="bi bi-linkedin"></i>:{' '}
                <a className={`text-light text-decoration-none`} href="https://www.linkedin.com/in/rahul-wilful/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/rahul-wilful
                </a>
              </p>
              <p className={`deliusRegular detail email `}>
                <i class="bi bi-github"></i>:{' '}
                <a className={`text-light text-decoration-none`} href="https://github.com/rahulwilful" target="_blank" rel="noopener noreferrer">
                  https://github.com/rahulwilful
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-3 deliusRegular detail copyright ">
          © 2023 Copyright:
          <a className="text-light" href="#">
            rahulpatil
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
