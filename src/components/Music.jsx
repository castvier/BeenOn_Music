import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const MusicContainer = styled(motion.div)`
  padding: 2rem;
  background: ${theme.colors.background};
  position: relative;
  margin-top: 50px; // Add margin instead of negative top position
`;

const Title = styled.h2`
  color: ${theme.colors.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: ${theme.shadows.neon.yellow};
  padding-top: 2rem;
  background: ${theme.colors.background};
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TrackCard = styled(motion.div)`
  background: rgba(18, 18, 18, 0.95);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 211, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 211, 0, 0.2);
  }
`;

const Music = () => {
  const tracks = [
    {
      id: '1521005218',
      title: 'Club Avenue'
    },
    {
      id: '1399223092',
      title: 'Im Talking'
    },
    {
      id: '1310914558',
      title: 'KXLU88.9FM // IN A DREAM WITH MYSTIC PETE Radio Mix'
    },
    {
      id: '1096820773',
      title: 'Crackin'
    },
    {
      id: '998954224',
      title: 'Workin (Free Download)'
    },
    {
      id: '867536047',
      title: 'Ludacris - Pimpin All Over The World ft. Bobby V (NowIsOn Flip)'
    }
  ];

  return (
    <MusicContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Latest Tracks</Title>
      <TracksGrid>
        {tracks.map((track, index) => (
          <TrackCard
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <iframe
              width="100%"
              height="180"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&color=%23FFD300&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
            ></iframe>
          </TrackCard>
        ))}
      </TracksGrid>
    </MusicContainer>
  );
};

export default Music;
