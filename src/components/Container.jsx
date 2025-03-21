import React from 'react';
import { backgroundImage } from '../constants/imagesAndIcons';
import s from './Container.module.css';
import Footer from './Footer';

const Container = ({ children, pt, pb, pe, ps, tempBorder, px, display, justify, align, height }) => {
  const style = {
    paddingTop: pt || null,
    display: display || 'flex',
    justifyContent: justify || 'center',
    alignItems: align || 'center',
    //background: ' linear-gradient(90deg, #000000, #0f0f0f, #191919, #222222, #222222, #191919, #0f0f0f, #000000)',
    // Add other padding styles similarly if needed
    paddingBottom: pb || 0,
    paddingLeft: px || ps || null,
    paddingRight: px || pe || null
    // backgroundImage: `url(${backgroundImage})`
  };

  return (
    <>
      <div className={` ${s.backgroundImage} container`}>
        <div className={`${height || 'min-vh-100'} px-1 px-md-5  text-light overflow-y-auto ${tempBorder ? 'border border-danger' : null}`} style={style}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Container;
