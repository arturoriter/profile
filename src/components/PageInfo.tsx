import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import LinkedinBadge from './LinkedinBadge';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const PageContent = styled.div`
  ul {
    padding: 0.1em;
  }
`;

const PageInfo = () => {
  return (
    <PageContent>
      <Title name="INFO.TITLE" />
      <FormattedMessage id="INFO.DESCRIPTION" />
      <Container fluid style={{ margin: '0' }}>
        <Row>
          <Col>
            <ul>
              <li>React</li>
              <li>Typescript</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Bootstrap</li>
              <li>Styled-components</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <LinkedinBadge background="light" profileName="arturoriter" />
    </PageContent>
  );
};

export default PageInfo;
