import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import LinkedinBadge from './LinkedinBadge';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const PageContent = styled.div`
  margin-bottom: 2em;
`;

const PageInfo = () => {
  return (
    <PageContent>
      <Title name="INFO.TITLE" />
      <FormattedMessage id="INFO.DESCRIPTION" />
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
      <LinkedinBadge background="light" profileName="arturoriter" />
    </PageContent>
  );
};

export default PageInfo;
