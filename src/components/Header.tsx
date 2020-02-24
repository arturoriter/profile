import React from 'react';
import styled from 'styled-components';
import Contacts, { ContactListType } from './Contacts';
import { Row, Col } from 'react-bootstrap';

const Name = styled.div`
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
`;

const JobTitle = styled.div`
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5em;
`;

const PageContent = styled.header`
  margin-bottom: 2em;
  background-color: #b1d6dc;
`;

interface HeaderType {
  name: string;
  headline: string;
  contacts: ContactListType;
}

interface HeaderListType {
  data: HeaderType;
}

const Header = (props: HeaderListType) => {
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
          <JobTitle>{props.data.headline}</JobTitle>
        </Col>
        <Col
          xs="12"
          sm="4"
          md="3"
          lg="3"
          xl="2"
          style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
        >
          <Contacts data={props.data.contacts.data} />
        </Col>
      </Row>
    </PageContent>
  );
};

export default Header;
