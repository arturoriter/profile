import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const RegularMarginBottom = styled.div`
  margin-bottom: 1em;
`;

interface EducationType {
  course: string;
  institution: string;
  degree: string;
  startDate: number;
  endDate?: number;
  thesisTopic?: string;
}

interface EducationListType {
  data: Array<EducationType>;
}

const Education = ({ data }: EducationListType) => {
  return (
    <div id="education">
      <Title name="EDUCATION.TITLE" />
      {data.map((education, index) => (
        <RegularMarginBottom key={`education-${index}`}>
          {`${education.course}; 
          ${education.institution}, 
          ${education.degree}. 
          ${education.startDate} - ${education.endDate || ''} \n
          ${education.thesisTopic || ''}`}
        </RegularMarginBottom>
      ))}
    </div>
  );
};

export default Education;
