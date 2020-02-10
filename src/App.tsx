import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Languages from './components/Languages';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PageInfo from './components/PageInfo';
import Footer from './components/Footer';
import styled from 'styled-components';

export const AppContainer = styled.div`
  margin-top: 3em;
  padding: 2em;
  font-size: 0.8em;
`;

const App = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <About />
        <Summary />
        <Skills />
        <WorkExperience />
        <Education />
        <Languages />
        <PageInfo />
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
