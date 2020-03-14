import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';

import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Languages from './components/Languages';
import LinkedinBadge from './components/LinkedinBadge';
import Skills from './components/Skills';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';

import { useTheme } from './ThemeManager';

import profile from './data/profile.json';

const StyledDiv = styled.div`
  background-color: ${props => props.theme.page.backgroundColor};
  color: ${props => props.theme.page.textColor};
  font-family: 'Lato-Light', 'Arial', 'Helvetica', sans-serif;
  text-align: justify;
`;

const App = () => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 0);
    }).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={theme.mode}>
      <StyledDiv id="app">
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
