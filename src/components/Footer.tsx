import React from 'react';
import styled from 'styled-components';
import BootstrapIcon from './BootstrapIcon';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

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

const DevelopedBy = styled.span`
  font-size: 0.8em;
  color: #fff;

  @media (max-width: 575px) {
    font-size: 0.6em;
  }
`;

const Footer = () => {
  return (
    <PageContainer id="footer">
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
            <Link
              href="https://linkedin.com/in/arturoriter"
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
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default Footer;
