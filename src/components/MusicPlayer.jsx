import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0;
  z-index: 1000;
  border-top: 1px solid rgba(255, 211, 0, 0.1);
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0.85), #121212);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #121212;
    opacity: 0.85;
    z-index: -1;
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
`;

const MusicPlayer = () => {
  return (
    <PlayerContainer>
      <iframe
        width="100%"
        height="100"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/leo-villalobos-129611650/summer-bopz-radio-episode-5&color=%23FFD300&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true&buying=false"
      ></iframe>
    </PlayerContainer>
  );
};

export default MusicPlayer;
