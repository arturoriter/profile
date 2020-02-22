import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import LinkedinBadge from './LinkedinBadge';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

const PageContent = styled.div`
  margin-bottom: 2em;
`;

const PageInfo = () => {
  return (
    <PageContent>
      <Title name="Page Info" />
      This profile has been developed using the following:
      <Row>
        <Col sm="6">
          <li>React</li>
          <li>Typescript</li>
        </Col>
        <Col sm="6">
          <li>Bootstrap</li>
          <li>Styled-components</li>
        </Col>
      </Row>
      <LinkedinBadge bg="light" />
    </PageContent>
  );
};

export default PageInfo;
