import React from 'react';
import styled from 'styled-components';
import Contacts, { ContactType } from './Contacts';
import { Container, Row, Col } from 'react-bootstrap';
import { darkTheme } from '../data/darkTheme';
import { useTheme } from '../ThemeManager';

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
  color: ${props => props.theme.header.textColor};
  background-color: ${props => props.theme.header.backgroundColor};
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 1em;
`;

const Button = styled.button`
  color: ${props => props.theme.button.textColor};
  background-color: ${props => props.theme.button.backgroundColor};
  margin-top: 1em;
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  cursor: pointer;
  font-size: 0.7em;
  padding: 0.2em 0.5em;
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
  const theme = useTheme();

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
            <Button onClick={() => theme.toggle()}>
              {theme.mode === darkTheme
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode'}
            </Button>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
