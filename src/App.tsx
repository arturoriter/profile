import React from 'react';
import About from './components/About';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Languages from './components/Languages';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PageInfo from './components/PageInfo';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-size: 0.8em;
  font-family: 'Lato-Light', serif;
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <About />
        <div className="container">
          <Summary />
          <Skills />
          <WorkExperience />
          <Education />
          <Languages />
          <PageInfo />
        </div>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
