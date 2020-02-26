import React from 'react';
import styled from 'styled-components';
import Contacts, { ContactType } from './Contacts';
import { Container, Row, Col } from 'react-bootstrap';

const Name = styled.div`
  font-size: 3em;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 2.2em;
  }
`;

const Headline = styled.div`
  text-transform: uppercase;
  line-height: 1.5em;

  @media (max-width: 575px) {
    margin-bottom: 1em;
  }
`;

const StyledHeader = styled.header`
  text-align: center;
  color: ${props => props.theme.header.color};
  background-color: ${props => props.theme.header.backgroundColor};
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 1em;
`;

interface HeaderType {
  name: string;
  headline: string;
  contacts: Array<ContactType>;
}

interface HeaderListType {
  data: HeaderType;
}

const Header = ({ data }: HeaderListType) => {
  return (
    <StyledHeader id="header">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col
            xs="12"
            sm="8"
            md="6"
            lg="5"
            xl="5"
            style={{ alignSelf: 'center', lineHeight: '1' }}
          >
            <Name>{data.name}</Name>
            <Headline>{data.headline}</Headline>
          </Col>
          <Col
            xs="12"
            sm="4"
            md="3"
            lg="3"
            xl="2"
            style={{ alignSelf: 'center' }}
          >
            <Contacts data={data.contacts} />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
