import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <span className="fa fa-home"></span>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#summary">
              <span className="fa fa-key"></span>
              &nbsp; Summary
            </Nav.Link>
            <Nav.Link href="#skills">
              <span className="fa fa-trophy"></span>
              &nbsp; Skills
            </Nav.Link>
            <Nav.Link href="#experiences">
              <span className="fa fa-rocket"></span>
              &nbsp; Work Experience
            </Nav.Link>
            <Nav.Link href="#education">
              <span className="fa fa-book"></span>
              &nbsp;Education
            </Nav.Link>
            <Nav.Link href="#languages">
              <span className="fa fa-globe"></span>
              &nbsp; Languages
            </Nav.Link>
            <Nav.Link href="#footer">
              <span className="fa fa-envelope"></span>
              &nbsp;Contacts
            </Nav.Link>
            <Nav.Link href="#pageInfo">
              <span className="fa fa-info"></span>
              &nbsp;Page Info
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </HeaderContainer>
  );
};

export default Header;
