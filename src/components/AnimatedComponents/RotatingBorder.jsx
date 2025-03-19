import React from 'react';
import s from './RotatingBorder.module.css';

const RotatingBorder = ({ children, circle }) => {
  return (
    <>
      <div className={`card-hover ${circle ? 'rounded-circle' : ''} ${s.box} ${s.blue}`}>
        <div className={`rounded overflow-hidden  ${circle ? 'rounded-circle' : ''}`}>{children}</div>
      </div>
    </>
  );
};

export default RotatingBorder;
