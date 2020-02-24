import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import PageInfo from './components/PageInfo';
import Footer from './components/Footer';
import styled from 'styled-components';
import profile from './data/profile.json';
import { Container, Row, Col } from 'react-bootstrap';

const AppContainer = styled.div`
  font-family: 'Lato-Light', 'Arial', 'Helvetica', sans-serif;
  text-align: justify;
`;

const App = () => {
  return (
    <AppContainer>
      <Header
        data={{
          name: profile.name,
          headline: profile.headline,
          contacts: {
            data: profile.contacts,
          },
        }}
      />
      <Container className="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-7">
        <Row>
          <Col>
            <Summary data={profile.summary} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Skills data={profile.skills} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WorkExperience data={profile.workExperience} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Education data={profile.education} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Certifications data={profile.certifications} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Languages data={profile.languages} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PageInfo />
          </Col>
        </Row>
      </Container>
      <Footer />
    </AppContainer>
  );
};

export default App;
