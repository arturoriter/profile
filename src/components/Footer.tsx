import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  overflow: hidden;
  background: #343a40;
  text-align: center;
  font-size: 0.8em;
  color: #fff;
  display: flex;
  height: 8em;
  align-items: center;
  justify-content: space-around;
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageGitHub = styled.img`
  width: 2rem;
  background: #fff;
  border-radius: 50%;
`;

export const ImageLinkedin = styled.img`
  width: 2rem;
  background: #fff;
  border-radius: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <footer>
        <p>
          <a href="mailto:arturo.riter@gmail.com">arturo.riter@gmail.com</a>
        </p>
        <SocialMediaIcon>
          <a
            href="https://github.com/arturoriter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageGitHub
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arturoriter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLinkedin
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
        </SocialMediaIcon>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
