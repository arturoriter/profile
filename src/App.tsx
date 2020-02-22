import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Languages from './components/Languages';
import PageInfo from './components/PageInfo';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-size: 0.8em;
  font-family: 'Lato-Light', serif;
  text-align: justify;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <div className="container col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-7">
        <Summary />
        <Skills />
        <WorkExperience />
        <Education />
        <Languages />
        <PageInfo />
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;
