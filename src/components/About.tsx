import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';

const Name = styled.div`
  font-size: 44pt;
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
      <div
        className="row container-fluid justify-content-around"
        style={{ margin: '0' }}
      >
        <div>
          <Name>ARTURO RITER</Name>
          <JobTitle>Lead Senior Engineer / Senior Software Engineer</JobTitle>
        </div>
        <Contacts />
      </div>
    </PageContent>
  );
};

export default About;
