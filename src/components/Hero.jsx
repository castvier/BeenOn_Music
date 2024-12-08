import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  color: ${theme.colors.primary};
  text-shadow: 
    0 0 10px rgba(0,0,0,0.8),
    0 0 20px rgba(0,0,0,0.5),
    0 0 30px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  margin: 1rem 0;
  color: ${theme.colors.text};
  text-shadow: 
    0 0 10px rgba(0,0,0,0.8),
    0 0 20px rgba(0,0,0,0.5),
    0 0 30px rgba(0,0,0,0.3);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundImage />
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BEENON
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Electronic Music Producer & DJ
        </Subtitle>
      </Content>
    </HeroSection>
  );
};

export default Hero;
