import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import s from './Skills.module.css';
import { profileImage } from '../constants/imagesAndIcons';
import SpotlightCard from '../components/Cards/SpotlightCard';
import { SkillsInformation } from '../constants/SkillsInformation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const scrollRef = useRef(null);
  const [AllSkills, setAllSkills] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i in SkillsInformation) {
      temp.push({ skill: SkillsInformation[i], color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)` });
    }
    setAllSkills(temp);
  }, []);

  useEffect(() => {
    if (!AllSkills.length) return;

    gsap.fromTo(
      '.skill',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1, // Apply stagger to all elements with the class 'skill'
        delay: 1.2
      }
    );
  }, [AllSkills]);

  return (
    <>
      <Container pt={30} display={'start'} tempBorder={false}>
        <div className={`d-flex flex-wrap justify-content-evenly gap-3`} ref={scrollRef}>
          {AllSkills.map((skill, index) => (
            <div className="skill opacity" key={index}>
              <SpotlightCard className="" spotlightColor={skill.color}>
                {skill.skill}
              </SpotlightCard>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Skills;

/* useEffect(() => {
    if (!AllSkills.length) return;
    const cards = scrollRef?.current?.children;
    const config = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, self) => {
      const targets = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => {
          self.unobserve(entry.target);
          return entry.target;
        });

      fadeIn(targets);
    }, config);

    Array.from(cards)?.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, [AllSkills]);

  function fadeIn(targets) {
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.1
    });
  } */
