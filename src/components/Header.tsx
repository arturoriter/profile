import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import { Row, Col } from 'react-bootstrap';

const Name = styled.div`
  font-size: 36pt;
  text-align: center;
  text-transform: uppercase;
`;

const JobTitle = styled.div`
  font-size: 11pt;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5em;
`;

const PageContent = styled.header`
  margin-bottom: 2em;
  background-color: #b1d6dc;
`;

const Header = (props: any) => {
  return (
    <PageContent id="header">
      <Row className="justify-content-md-center">
        <Col
          xs="12"
          sm="8"
          md="6"
          lg="5"
          xl="5"
          style={{ alignSelf: 'center', lineHeight: '1' }}
        >
          <Name>{props.data.name}</Name>
          <JobTitle>{props.data.jobTitle}</JobTitle>
        </Col>
        <Col
          xs="12"
          sm="4"
          md="3"
          lg="3"
          xl="2"
          style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
        >
          <Contacts data={props.data.contacts} />
        </Col>
      </Row>
    </PageContent>
  );
};

export default Header;
