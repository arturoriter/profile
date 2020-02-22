import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const FooterContainer = styled.div`
  background: #303336;
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  margin-top: 2em;
`;

const Link = styled.a`
  font-size: 2em;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <footer>
        <Link
          href="https://linkedin.com/in/arturoriter?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BootstrapIcon name="linkedin-square" />
        </Link>
        <Link
          href="https://github.com/arturoriter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BootstrapIcon name="github-square" />
        </Link>
        <Link
          href="mailto:arturo.riter@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BootstrapIcon name="envelope" />
        </Link>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
