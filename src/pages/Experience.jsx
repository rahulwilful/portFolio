import React from 'react';
import Container from '../components/Container';
import s from './Experience.module.css';
import { profileImage } from '../constants/imagesAndIcons';

const Experience = () => {
  return (
    <>
      <Container tempBorder={true}>
        <div className={` tempBorder w-100 h-100 d-flex flex-column  gap-3`}>
          <div className={`border  border border-primary tempBorder py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div className={`border  border border-primary tempBorder py-5  d-flex justify-content-end align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
          <div className={`border  border border-primary tempBorder py-5  d-flex justify-content-start align-items-center px-5`}>
            <div className={`${s.experience1}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat. Nulla facilisi. Morbi non nulla ipsum. Sed eu ligula laoreet, malesuada lectus quis, ultricies erat.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Experience;
