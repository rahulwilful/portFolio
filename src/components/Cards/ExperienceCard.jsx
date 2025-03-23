import React, { useEffect } from 'react';
import s from './ExperienceCard.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { globalDuration, navBarDelay } from '../../constants/animationDelays';

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ children, from, to, organisation, title, details, position, index }) => {
  const NA = 'NA';

  const animateDetail = card => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1.5,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      '.title',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.title',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      '.subTitle',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1.2,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.subTitle',
          start: 'top 100%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      '.subTitle2',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1.3,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.subTitle2',
          start: 'top 100%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    const details = document.querySelectorAll('.detail');

    details.forEach((detail, index) => {
      // animateDetail(detail);
    });
  }, []);

  const config = { threshold: 0.1 };

  let observer = new IntersectionObserver(function (entries, self) {
    let targets = entries.map(entry => {
      if (entry.isIntersecting) {
        self.unobserve(entry.target);
        return entry.target;
      }
    });

    // Call our animation function
    fadeIn(targets);
  }, config);

  useEffect(() => {
    document.querySelectorAll('.detail').forEach(box => {
      observer.observe(box);
    });
  }, []);

  function fadeIn(targets) {
    gsap.to(targets, {
      delay: 2,
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.3,
      ease: 'power1.out'
    });
  }

  return (
    <div className={`cards  py-1   d-flex justify-content-center justify-content-xl-${position} align-items-center `}>
      <div className={`${s.experience1}  border border-dark glass2 py-5 px-3 px-md-4 rounded-3 d-flex flex-column gap-3`}>
        <div className={`d-flex flex-column `}>
          <h3 className="text-center title winkySans600 ">{title || NA}</h3>
          <h5 className={`subTitle deliusRegular subText`}>
            <i class="bi bi-building"></i> {organisation || NA}
          </h5>
          <h6 className={`subTitle2  deliusRegular subText2`}>
            <i class="bi bi-calendar3"></i> {from || NA} - {to || NA}
          </h6>
        </div>
        <div style={{ lineHeight: '' }}>
          {details ? (
            <ul style={{ lineHeight: '' }} className="deliusRegular">
              {details.map((detail, index) => (
                <li key={index} className={`textJustify detail ${s.opacity}`}>
                  {detail}
                </li>
              ))}
            </ul>
          ) : (
            NA
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
