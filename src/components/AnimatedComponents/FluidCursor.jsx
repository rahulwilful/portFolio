import React, { useEffect, useRef } from 'react';
import s from './FluidCursor.module.css';

const FluidCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    // Smooth animation using lerp (linear interpolation)
    const animate = () => {
      const diffX = mouseX - posX;
      const diffY = mouseY - posY;

      posX += diffX * 0.1; // Adjust this value (0.1) for speed
      posY += diffY * 0.1;

      if (cursor) {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (follower) {
        follower.style.transform = `translate(${posX}px, ${posY}px)`;
      }

      requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = e => {
      mouseX = e.clientX - 5; // Offset by half cursor size
      mouseY = e.clientY - 5;
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`${s.cursor_dot}`}></div>
      <div ref={followerRef} className={`${s.cursor_follower}`}></div>
    </>
  );
};

export default FluidCursor;
