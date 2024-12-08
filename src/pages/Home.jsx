import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { theme } from '../styles/theme';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0ff;
    transform: scale(1.1);
  }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-image: url('/assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 8vw, 6rem);
  color: ${theme.colors.primary};
  text-shadow: 0 0 10px rgba(255, 211, 0, 0.7),
               0 0 20px rgba(255, 211, 0, 0.5),
               0 0 30px rgba(255, 211, 0, 0.3),
               2px 2px 4px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  z-index: 1;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;

  &:hover {
    color: ${theme.colors.accent1};
    text-shadow: 0 0 10px rgba(12, 123, 220, 0.7),
                 0 0 20px rgba(12, 123, 220, 0.5),
                 0 0 30px rgba(12, 123, 220, 0.3),
                 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;

const BioContainer = styled(motion.div)`
  position: absolute;
  left: calc(100% + 2rem);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(18, 18, 18, 0.9);
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  color: ${theme.colors.text};
  backdrop-filter: blur(5px);
  border: 1px solid ${theme.colors.accent1};
  box-shadow: ${theme.shadows.neon.blue};
  z-index: 3;

  p {
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const SubtitleContainer = styled.div`
  position: relative;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.accent1};
  text-shadow: 0 0 10px rgba(12, 123, 220, 0.7),
               0 0 20px rgba(12, 123, 220, 0.5),
               2px 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
  letter-spacing: 3px;
  position: relative;
  z-index: 2;
  font-family: 'Orbitron', sans-serif;
`;

const Hero = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <HeroContainer>
      <TitleContainer>
        <Title 
          onMouseEnter={() => setShowBio(true)}
          onMouseLeave={() => setShowBio(false)}
        >
          BEENON
        </Title>
        <AnimatePresence>
          {showBio && (
            <BioContainer
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p>
                BEENON is an innovative electronic music producer and DJ based in California. 
                With over a decade of experience crafting unique soundscapes and rhythms, 
                BEENON's music seamlessly blends elements of house, techno, and experimental 
                electronic genres. Known for energetic live performances and distinctive 
                production style, each track is crafted to create an immersive sonic experience.
              </p>
            </BioContainer>
          )}
        </AnimatePresence>
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Electronic Music Producer & DJ
        </Subtitle>
      </SubtitleContainer>
    </HeroContainer>
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <SocialLinks>
        <SocialLink href="https://soundcloud.com/beenon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} />
        </SocialLink>
      </SocialLinks>
      <MusicPlayer />
    </HomeContainer>
  );
};

export default Home;
