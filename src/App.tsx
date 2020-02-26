import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import profile from './data/profile.json';
import { Container, Row, Col } from 'react-bootstrap';
import LinkedinBadge from './components/LinkedinBadge';
import { useTheme } from './ThemeManager';

const StyledDiv = styled.div`
  background-color: ${props => props.theme.page.backgroundColor};
  color: ${props => props.theme.page.textColor};
  font-family: 'Lato-Light', 'Arial', 'Helvetica', sans-serif;
  text-align: justify;
`;

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme.mode}>
      <StyledDiv>
        <Header
          data={{
            name: profile.name,
            headline: profile.headline,
            contacts: profile.contacts,
          }}
        />
        <Container className="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-7">
          <Row>
            <Col>
              <Summary data={profile.summary} />
              <Skills data={profile.skills} />
              <WorkExperience data={profile.workExperience} />
              <Education data={profile.education} />
              <Certifications data={profile.certifications} />
              <Languages data={profile.languages} />
              <LinkedinBadge profileName={profile.linkedinProfileName} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;
