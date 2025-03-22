import React, { useEffect } from 'react';
import s from './ProjectCard.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, from, to, details, organisation, skills }) => {
  console.log('skills', skills);

  const NA = 'NA';
  const animateHeading = card => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1,
        y: 0,
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
    const headings = document.querySelectorAll('.heading');

    // Loop through each card and apply the animation
    headings.forEach((heading, index) => {
      animateHeading(heading);
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.subText',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1.4,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.subText',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      '.subText2',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: 1.8,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.subText2',
          start: 'top 97%',
          end: 'top 0%',
          //markers: true,
          toggleActions: 'play none none reverse'
        }
      }
    );
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

  let observerSkill = new IntersectionObserver(function (entries, self) {
    let targets = entries.map(entry => {
      if (entry.isIntersecting) {
        self.unobserve(entry.target);
        return entry.target;
      }
    });

    // Call our animation function
    fadeInSkill(targets);
  }, config);

  useEffect(() => {
    document.querySelectorAll('.skill').forEach(box => {
      observerSkill.observe(box);
    });
  }, []);

  function fadeInSkill(targets) {
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
    <>
      <div className={`min-vh-100  d-flex flex-column justify-content-center align-items-center`}>
        <div className={`  glass2  mb-4  border border-dark border-opacity-50 px-3 px-md-4  overflow-y-auto  py-4 gap-3 d-flex flex-column justify-content-start align-items-center `}>
          <div className={` border-bottom border-secondary w100 text-center`}>
            <h2 className="winkySans600 heading"> {title || 'No Title'}</h2>
            <div className={`w-100 d-flex flex-column flex-md-row align-items-md-end justify-content-center gap-md-4 gap-lg-5`}>
              <h5 className={` deliusRegular     subText`}>
                <i class="bi bi-building"></i> {organisation || NA}
              </h5>
              <h6 className={`  deliusRegular    subText2`}>
                <i class="bi bi-calendar3"></i> {from || NA} - {to || NA}
              </h6>
            </div>
          </div>

          <div className={` ${s.card} fs-5 deliusRegular d-flex flex-column justify-content-center align-items-center`}>
            <ol className={` `}>
              {details ? (
                details.map((detail, index) => (
                  <li className={`detail ${s.opacity}`} key={index}>
                    {detail}
                  </li>
                ))
              ) : (
                <h1> No Details Found</h1>
              )}
              <li className={`detail ${s.opacity}`}>
                Skills :{' '}
                <ul className={`d-flex flex-wrap list-unstyled`}>
                  {skills
                    ? skills.map((skill, index) => (
                        <li className={` mx-1 my-1 fs-6 px-2 py-1 skill ${s.opacity}`} key={index}>
                          <button type="button" class="btn btn-sm  btn-outline-light  rounded-pill">
                            {skill}
                          </button>
                        </li>
                      ))
                    : 'No Skills Found'}
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
