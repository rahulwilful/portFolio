import React from 'react';
import { backgroundImage } from '../constants/imagesAndIcons';
import s from './Container.module.css';

const Container = ({ children, pt, pb, pe, ps, tempBorder, px, display, justify, align }) => {
  const style = {
    paddingTop: pt || '60px',
    display: display || 'flex',
    justifyContent: justify || 'center',
    alignItems: align || 'center',
    //background: ' linear-gradient(90deg, #000000, #0f0f0f, #191919, #222222, #222222, #191919, #0f0f0f, #000000)',
    // Add other padding styles similarly if needed
    // paddingBottom: pb || 'defaultValue',
    paddingLeft: px || ps || 50,
    paddingRight: px || pe || 50
    // backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className={`min-vh-100 text-light ${s.backgroundImage} ${tempBorder ? 'border border-danger' : null}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
