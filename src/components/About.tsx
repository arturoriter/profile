import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';

const Name = styled.div`
  font-size: 36pt;
  text-align: center;
`;

const JobTitle = styled.div`
  font-size: 11pt;
  text-align: center;
  text-transform: uppercase;
`;

const PageContent = styled.div`
  margin-bottom: 2em;
  background-color: #b1d6dc;
`;

const About = () => {
  return (
    <PageContent>
      <div className="container col-12 col-md-9 col-xl-8">
        <div className="row justify-content-md-center no-gutters">
          <div
            className="col col-md-8"
            style={{ alignSelf: 'center', lineHeight: '1' }}
          >
            <Name>ARTURO RITER</Name>
            <JobTitle>Lead Senior Engineer / Senior Software Engineer</JobTitle>
          </div>
          <div className="col-md-auto"></div>
          <div className="col col-md-4" style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
            <Contacts />
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default About;
