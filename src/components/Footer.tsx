import React from 'react';
import styled from 'styled-components';

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
  margin-right: 0.2em;
  margin-left: 0.2em;
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
          <span className="fa fa-linkedin-square" />
        </Link>
        &nbsp;
        <Link
          href="https://github.com/arturoriter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-github-square" />
        </Link>
        &nbsp;
        <Link
          href="mailto:arturo.riter@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-envelope" />
        </Link>
        &nbsp;
      </footer>
    </FooterContainer>
  );
};

export default Footer;
