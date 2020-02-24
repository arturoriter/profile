import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';

const PageContainer = styled.footer`
  background: #303336;
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
`;

const Link = styled.a`
  font-size: 2em;
  color: #fff;
`;

const Footer = () => {
  return (
    <PageContainer id="footer">
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
    </PageContainer>
  );
};

export default Footer;
