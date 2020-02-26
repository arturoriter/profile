import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const StyledFooter = styled.footer`
  color: ${props => props.theme.footer.color};
  background-color: ${props => props.theme.footer.backgroundColor};
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
`;

const StyledLink = styled.a`
  font-size: 2em;
  color: ${props => props.theme.footer.color};
`;

const DevelopedBy = styled.span`
  font-size: 0.8em;

  @media (max-width: 575px) {
    font-size: 0.6em;
  }
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Container>
        <Row>
          <Col>
            <DevelopedBy>
              <FormattedMessage id="FOOTER.DEVELOPED_BY" />
            </DevelopedBy>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledLink
              href="https://linkedin.com/in/arturoriter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BootstrapIcon name="linkedin-square" />
            </StyledLink>
            <StyledLink
              href="https://github.com/arturoriter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BootstrapIcon name="github-square" />
            </StyledLink>
            <StyledLink
              href="mailto:arturo.riter@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BootstrapIcon name="envelope" />
            </StyledLink>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
