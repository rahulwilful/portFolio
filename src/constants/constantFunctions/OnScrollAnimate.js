// animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateElements = (elements, delay) => {
  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        delay: delay || 0.2 * (index + 1),
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 97%',
          end: 'top 0%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
};
