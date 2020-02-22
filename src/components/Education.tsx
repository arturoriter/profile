import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const SmallMarginBottom = styled.div`
  margin-bottom: 0.5em;
`;

const Education = () => {
  return (
    <div id="education">
      <Title name="Education" />
      <SmallMarginBottom>
        <div>
          Oracle DBA; Veris IBTA, Post-Graduate Degree - 2010 – 2011 Thesis
          topic:
        </div>
        <div>Oracle Recovery Manager (RMAN)</div>
      </SmallMarginBottom>
      <SmallMarginBottom>
        <div>
          Computer Engineer; Universidade São Francisco, Bachelor’s Degree -
          2002– 2006
        </div>
        <div>
          Full Honors. Thesis topic: Distributed programming technologies in
          Java
        </div>
      </SmallMarginBottom>
      <div>
        Computing Programming; COTUCA - Unicamp, Technician Degree - 2000 – 2001
      </div>
      <Title name="Certifications / Courses" />
      <li>AWS Certified Solutions Architect. Udemy.</li>
      <li>Demystifying AWS Certified Solutions Architect. Pluralsight.</li>
      <li>ES6 Training. Pluralsight.</li>
      <li>React: The Big Picture / React: Getting Started. Pluralsight.</li>
      <li>Certified Professional Scrum Master I. Scrum.org.</li>
      <li>MongoDB for Java Developers. MongoDB University.</li>
      <li>
        MySQL Certification: MySQL Database Administration. EAC - Authorized
        MySQL Training Center.
      </li>
      <li>
        MySQL Certification: MySQL Database Optimization. EAC - Authorized MySQL
        Training Center.
      </li>
    </div>
  );
};

export default Education;
