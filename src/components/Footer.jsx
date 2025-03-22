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
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase winkySans600 detail contactInfo ">Contact Information</h5>
              <p className={`deliusRegular detail phone `}>
                Phone: <a href="tel:+919767589256">+91 9767589256</a>
              </p>
              <p className={`deliusRegular detail email `}>
                Email: <a href="mailto:rahulwilful@gmail.com">rahulwilful@gmail.com</a>
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
