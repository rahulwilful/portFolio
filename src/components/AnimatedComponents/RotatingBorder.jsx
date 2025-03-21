import React from 'react';
import s from './RotatingBorder.module.css';

const RotatingBorder = ({ children, circle, tempBorder }) => {
  return (
    <>
      <div className={`card-hover h-100 w-100 ${tempBorder ? 'tempBorder' : ''} ${circle ? 'rounded-circle' : ''} ${s.box} ${s.blue}`}>
        <div className={`rounded overflow-hidden   h-100 w-100 ${circle ? 'rounded-circle' : ''}`}>{children}</div>
      </div>
    </>
  );
};

export default RotatingBorder;
