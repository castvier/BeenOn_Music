import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { theme } from '../styles/theme';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 211, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: ${theme.shadows.neon.yellow};
  
  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const LogoText = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-shadow: ${theme.shadows.neon.yellow};
  letter-spacing: 2px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const EmailContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const EmailIcon = styled.div`
  color: ${theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(18, 18, 18, 0.95);
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 211, 0, 0.1);
  margin-top: 0.5rem;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(255, 211, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 10px;
    width: 12px;
    height: 12px;
    background: rgba(18, 18, 18, 0.95);
    transform: rotate(45deg);
    border-left: 1px solid rgba(255, 211, 0, 0.1);
    border-top: 1px solid rgba(255, 211, 0, 0.1);
  }
`;

const EmailText = styled.div`
  color: ${theme.colors.text};
  font-size: 1rem;
  padding: 0.5rem;
  user-select: text;
  cursor: text;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    text-shadow: ${theme.shadows.neon.yellow};
  }
`;

const Navbar = () => {
  const [showEmail, setShowEmail] = useState(false);
  const emailContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailContainerRef.current && !emailContainerRef.current.contains(event.target)) {
        setShowEmail(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">
        <LogoText>BEENON</LogoText>
      </Logo>
      <NavLinks>
        <NavLink to="/music">
          <FontAwesomeIcon icon={faMusic} />
        </NavLink>
        <EmailContainer ref={emailContainerRef}>
          <EmailIcon onClick={() => setShowEmail(!showEmail)}>
            <FontAwesomeIcon icon={faEnvelope} />
          </EmailIcon>
          <AnimatePresence>
            {showEmail && (
              <Dropdown
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <EmailText>
                  ericksbeenon@gmail.com
                </EmailText>
              </Dropdown>
            )}
          </AnimatePresence>
        </EmailContainer>
        <ExternalLink 
          href="https://soundcloud.com/erickbeen" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </ExternalLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
