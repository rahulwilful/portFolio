import React from 'react';
import Container from '../components/Container';
import s from './Skills.module.css';
import { profileImage } from '../constants/imagesAndIcons';
import SpotlightCard from '../components/Cards/SpotlightCard';

const Skills = () => {
  return (
    <>
      <Container tempBorder={true}>
        <div className={`d-flex flex-wrap gap-3`}>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            JavaScript
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 2, 255, 0.2)">
            react
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 2, 0.2)">
            node
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 229, 255, 0.2)">
            express
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            SQL
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            react-native
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            CSS
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            Bootstrap
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            Tailwind
          </SpotlightCard>{' '}
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            JavaScript
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            JavaScript
          </SpotlightCard>
        </div>
      </Container>
    </>
  );
};

export default Skills;
