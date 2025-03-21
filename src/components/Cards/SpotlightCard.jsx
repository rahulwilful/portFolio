import { useRef } from 'react';
import s from './SpotlightCard.module.css';
import StarBorder from '../AnimatedComponents/StarBorder';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <>
      <StarBorder as="container" color="red" speed="5s">
        <div className={`d-flex`}>
          <div ref={divRef} onMouseMove={handleMouseMove} className={`${s.card_spotlight} ${className} py-3 px-5 d-flex align-items-center justify-content-center text-capitalize  text-light`}>
            {children}
          </div>
        </div>
      </StarBorder>
    </>
  );
};

export default SpotlightCard;
